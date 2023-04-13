import { Student } from './student';

export type DialogAction = 'DELETE' | 'MODIFY';

export interface StudentDialogResult {
  student: Student;
  actionType: DialogAction;
}
