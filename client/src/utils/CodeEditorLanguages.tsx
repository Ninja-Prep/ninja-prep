// Theme CSS
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/night.css';
import 'codemirror/theme/monokai.css';
import 'codemirror-theme-github/theme/github.css';

// Language CSS
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import {LabelValuePair, Map} from './types/userSettings';

export const languageMap: Map = {
  'text/x-java': 'java',
  'text/x-c++src': 'cpp14',
  python: 'python3',
  javascript: 'nodejs',
};

export const languageToMode: Map = {
  java: 'text/x-java',
  cpp14: 'text/x-c++src',
  python3: 'python',
  nodejs: 'javascript',
};

export const themeOptions: LabelValuePair[] = [
  {value: 'eclipse', label: 'Eclipse'},
  {value: 'material', label: 'Material'},
  {value: 'night', label: 'Night'},
  {value: 'monokai', label: 'Sublime'},
];

export const modeOptions: LabelValuePair[] = [
  {value: 'text/x-java', label: 'Java'},
  {value: 'text/x-c++src', label: 'Cpp'},
  {value: 'javascript', label: 'Javascript'},
  {value: 'python', label: 'Python'},
];
