import { CiTwitter, CiInstagram, CiFacebook, CiLocationOn, CiPhone, CiClock2 } from "react-icons/ci";
import {
  Block,
  ContactHeader,
  Container,
  Info,
  InfoLine,
  HeaderContacts,
  Social,
  ContactText,
} from "./Contacts.styled";
import { Link } from "react-router-dom";
import { Accent } from "../../styled";

export function Contacts() {
  return (
    <Container>
      <Block>
        <HeaderContacts>
          Sip, Savor, Smile. <Accent>It’s coffee time!</Accent>
        </HeaderContacts>
        <Social>
          <Link to="https://twitter.com/" target="blank">
            <CiTwitter className="w-10 h-10" />
          </Link>
          <Link to="https://www.instagram.com/" target="blank">
            <CiInstagram className="w-10 h-10" />
          </Link>
          <Link to="https://www.facebook.com/" target="blank">
            <CiFacebook className="w-10 h-10" />
          </Link>
        </Social>
      </Block>
      <Block>
        <ContactHeader>Contact Us</ContactHeader>
        <Info>
          <InfoLine>
            <CiLocationOn className="w-10 h-10" />
            <ContactText>8558 Green Rd., LA</ContactText>
          </InfoLine>
          <InfoLine>
            <CiPhone className="w-10 h-10" />
            <ContactText>+1 (603) 555-0123</ContactText>
          </InfoLine>
          <InfoLine>
            <CiClock2 className="w-10 h-10" />
            <ContactText>Mon-Sat: 9:00 AM – 23:00 PM</ContactText>
          </InfoLine>
        </Info>
      </Block>
    </Container>
  );
}
