import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-forms-app';

  public form: FormGroup<Form> | null = null;
  public assignAdministrationAccessArray = [
    {
      value: 'Submission of activities',
      formControlName: 'submissionOfActivities',
    },
    {
      value: 'Set up of challenges',
      formControlName: 'setUpOfChallenges',
    },
    {
      value: 'Send communications',
      formControlName: 'sendCommunications',
    },
    {
      value: 'Access communication library',
      formControlName: 'accessCommunicationLibrary',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.buildForm();
  }

  public handleSubmission() {
    if (this.form?.valid) {
      console.log(this.form.value);
    }
  }

  private buildForm() {
    return this.fb.group<Form>({
      assignAdministrationAccess: this.fb.group({
        submissionOfActivities: this.fb.control(false),
        setUpOfChallenges: this.fb.control(false),
        sendCommunications: this.fb.control(false),
        accessCommunicationLibrary: this.fb.control(false),
      }),
    });
  }
}
