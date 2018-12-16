import {Metric} from './metric';

export class Pattern {
  id: number;
  name: string;
  description: string;
  author: string;
  available: boolean;
  editable: boolean;
  keywords: string[];
  versions = class {
    id: number;
    author: string;
    goal: string;
    forms = class {
      id: number;
      name: string;
      description: string;
      comments: string;
      modificationDate: string;
      fixedPart = class {
        id: number;
        formText: string;
        questionText: string;
        parameters = class {
          id: number;
          name: string;
          description: string;
          metric: Metric;
        };
      };
    };
  };
}
