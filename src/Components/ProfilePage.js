import React from "react";
import { Panel, PanelGroup, Container, Header, Content, Footer } from "rsuite";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

//className="flex justify-center items-center w-100 ba"

const ProfilePage = () => {
  return (
    <Panel shaded>
      <Container className="flex justify-center items-center">
        <Header>
          <Image src="https://picsum.photos/200" roundedCircle />
        </Header>
        <Content>
          <h1 className="flex justify-center items-center">Enrique, 25</h1>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Bio</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis urna libero, eget porttitor dui rhoncus at. Proin massa libero, vestibulum at dapibus eget, condimentum vel tellus."
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Preferred Pronouns
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="He, him, his"
                aria-label="Pronouns"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Dietary Restrictions
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Dairy, Gluten"
                aria-label="Dietary Restrictions"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Allergies</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Pollen"
                aria-label="Dietary Restrictions"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  Disabilities
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Red-green colour blind"
                aria-label="Dietary Restrictions"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">
                  @company.com
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Phone #</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="778-111-1111"
                aria-label="Dietary Restrictions"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
        </Content>
      </Container>
    </Panel>
  );
};

export default ProfilePage;
