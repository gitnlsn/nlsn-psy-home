export interface ZenklubRating {
  comment: string;
  createdAt: Date;
  id: number;
  profile: { displayName: string; firstName: string };
  updatedAt: Date;
  valid: boolean;
  value: number;
  visible: boolean;
}
