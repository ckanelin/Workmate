import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Feedback = () => {
    return (
<Form>
      <FormGroup>
          <Input type="Subject" name="Subject" id="exampleSubject" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
          <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
</Form>
    );
};
export default Feedback