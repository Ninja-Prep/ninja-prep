import {
  AggregationType,
  Measure,
  MeasureUnit,
  globalStats,
} from '@opencensus/core';
import {StackdriverStatsExporter} from '@opencensus/exporter-stackdriver';
import {logger} from './logger';

// Metric Names
const GOOGLE_OAUTH_COUNT_NAME = 'google_oauth_count';

export function recordMetric(measure: Measure, value: number): void {
  globalStats.record([
    {
      measure: measure,
      value: value,
    },
  ]);
}

export const METRIC_MEASURES = {
  GOOGLE_OAUTH_COUNT_MEASURE: globalStats.createMeasureInt64(
    GOOGLE_OAUTH_COUNT_NAME,
    MeasureUnit.UNIT,
    'Count of google OAuth login',
  ),
};

export function initializeGCPMetrics(): void {
  const projectId = 'ninjaprep-prod';
  if (!projectId || !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // throw Error('Unable to proceed without a Project ID');
    return;
  }

  const EXPORT_INTERVAL = 60;

  // Register the view to be exported to google. It is imperative that this step exists,
  const views = [
    globalStats.createView(
      GOOGLE_OAUTH_COUNT_NAME,
      METRIC_MEASURES.GOOGLE_OAUTH_COUNT_MEASURE,
      AggregationType.SUM,
      [],
      'Count of google OAuth login',
    ),
  ];

  // Register the views
  views.forEach((view) => globalStats.registerView(view));

  // Enable OpenCensus exporters to export metrics to Stackdriver Monitoring.
  // Exporters use Application Default Credentials (ADCs) to authenticate.
  // See https://developers.google.com/identity/protocols/application-default-credentials
  // for more details.
  // Expects ADCs to be provided through the environment as ${GOOGLE_APPLICATION_CREDENTIALS}
  // A Stackdriver workspace is required and provided through the environment as ${GOOGLE_PROJECT_ID}

  // GOOGLE_APPLICATION_CREDENTIALS are expected by a dependency of this code
  // Not this code itself. Checking for existence here but not retaining (as not needed)

  // The minimum reporting period for Stackdriver is 1 minute.
  try {
    const googleExporter = new StackdriverStatsExporter({
      projectId: projectId,
      period: EXPORT_INTERVAL * 1000,
    });
    // Pass the created exporter to Stats
    globalStats.registerExporter(googleExporter);
  } catch (err) {
    logger.warn(err);
  }
}
