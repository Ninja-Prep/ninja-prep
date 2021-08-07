import {
  DISCOVER_CONCEPTS,
  VIDEOS,
  ARTICLES,
  FEEDBACK,
  JOB,
} from './JourneyStringIds';

export const JourneyList = [
  {
    backgroundImage: 'discover',
    imagePath: DISCOVER_CONCEPTS.IMAGE_PATH,
    stepNumber: DISCOVER_CONCEPTS.STEP_NUMBER,
    title: DISCOVER_CONCEPTS.TITLE,
    description: DISCOVER_CONCEPTS.DESCRIPTION,
  },
  {
    backgroundImage: 'videos',
    imagePath: VIDEOS.IMAGE_PATH,
    stepNumber: VIDEOS.STEP_NUMBER,
    title: VIDEOS.TITLE,
    description: VIDEOS.DESCRIPTION,
  },
  {
    backgroundImage: 'articles',
    imagePath: ARTICLES.IMAGE_PATH,
    stepNumber: ARTICLES.STEP_NUMBER,
    title: ARTICLES.TITLE,
    description: ARTICLES.DESCRIPTION,
  },
  {
    backgroundImage: 'feedback',
    imagePath: FEEDBACK.IMAGE_PATH,
    stepNumber: FEEDBACK.STEP_NUMBER,
    title: FEEDBACK.TITLE,
    description: FEEDBACK.DESCRIPTION,
  },
  {
    backgroundImage: 'job',
    imagePath: JOB.IMAGE_PATH,
    stepNumber: JOB.STEP_NUMBER,
    title: JOB.TITLE,
    description: JOB.DESCRIPTION,
  },
];
