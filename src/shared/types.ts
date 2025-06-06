export interface Event {
  content: string;
  cover: string;
  createTime: string;
  description: string;
  enable: boolean;
  homeSelected: boolean;
  id: number;
  rawContent: string;
  selected: boolean;
  title: string;
  updateTime: string;
}

export interface EventResponse {
  code: number;
  data: Event[];
  message: string;
  success: boolean;
}

export interface Project {
  applyReason: string;
  content: string;
  cover: string;
  createTime: string;
  enable: boolean;
  fundsUseDesc: string;
  githubLink?: string;
  id: number;
  mileStone: string;
  officalWeb?: string;
  oneLiner: string;
  personBackground: string;
  personEmail: string;
  personName: string;
  personTelegram: string;
  personTwitter: string;
  projectName: string;
  rawContent: string;
  roadMap: string;
  selected: boolean;
  socialValue: string;
  stage: string;
  telegramLink?: string;
  twitterLink?: string;
  updateTime: string;
}

export interface ProjectResponse {
  code: number;
  data: Project[];
  message: string;
  success: boolean;
}