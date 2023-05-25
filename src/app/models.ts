import { FormControl, FormGroup } from '@angular/forms';

export interface Form {
  assignAdministrationAccess: FormGroup<AdministrationAccess>;
}

export interface AdministrationAccess {
  submissionOfActivities: FormControl<boolean | null>;
  setUpOfChallenges: FormControl<boolean | null>;
  sendCommunications: FormControl<boolean | null>;
  accessCommunicationLibrary: FormControl<boolean | null>;
}
