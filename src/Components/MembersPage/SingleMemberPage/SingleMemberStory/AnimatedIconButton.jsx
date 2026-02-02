
import React from "react";
import styled from "styled-components";

export default function AnimatedIconButton({ icon: Icon, text, href, bg }) {
  return (
    <StyledWrapper bg={bg}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="Btn">
        <div className="sign">
          <Icon />
        </div>
        <div className="text">{text}</div>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* icon on right */
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
    background-color: ${(props) => props.bg};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .sign {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    z-index: 2;
  }

  .sign svg {
    width: 22px;
    height: 22px;
    color: white;
  }

  .text {
    position: absolute;
    left: 0; /* text starts from left */
    width: 0;
    opacity: 0;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;
    white-space: nowrap;
    padding-left: 16px;
  }

  .Btn:hover {
    width: 150px;
    border-radius: 40px;
  }

  .Btn:hover .sign {
    width: 45px; /* icon stays in circle */
    margin-left: auto; /* keep icon right */
    padding-right: 16px;
  }

  .Btn:hover .text {
    width: calc(100% - 50px); /* fill remaining space */
    opacity: 1;
  }

  .Btn:active {
    transform: translate(2px, 2px);
  }
`;
