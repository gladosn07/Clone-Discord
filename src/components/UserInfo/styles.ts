import styled from "styled-components";
import { Mic, Headset, Settings } from "@styled-icons/material";

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--quaternary);
  padding: 11px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const Avatar = styled.button<{ isOnline: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);

  cursor: pointer;

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    right: 62px;
    top: 22px;

    background-color: ${(props) => (props.isOnline ? "green" : "red")};
    border-radius: 50%;

    content: "";
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  color: var(--white);

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MicIcon = styled(Mic)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: var(--senary);

  transition: all 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: var(--senary);
  margin: 0 5px;

  transition: all 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  color: var(--senary);
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: var(--white);
  }
`;
