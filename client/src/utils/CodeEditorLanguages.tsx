import {LabelValuePair, Map} from './types/userSettings';

export const CodeMirrorModeToLanguage: Map = {
  'text/x-java': 'java',
  'text/x-c++src': 'cpp14',
  python: 'python3',
  javascript: 'nodejs',
};

export const languageToCodeMirrorMode: Map = {
  java: 'text/x-java',
  cpp: 'text/x-c++src',
  python: 'python',
  nodejs: 'javascript',
};

export const codeMirrorThemeOptions: LabelValuePair[] = [
  {value: 'eclipse', label: 'Eclipse'},
  {value: 'material', label: 'Material'},
  {value: 'night', label: 'Night'},
  {value: 'monokai', label: 'Sublime'},
];

export const codeMirrorModeOptions: LabelValuePair[] = [
  {value: 'text/x-java', label: 'Java'},
  {value: 'text/x-c++src', label: 'Cpp'},
  {value: 'python', label: 'Python'},
];
