import { Background, Window, Popup } from "./Modal";
import { Flex, Absolute, Subtitle } from "../shared";
import cancel from '../../images/cancel.png';
import cancel_button from '../../images/cancel_button.png';
import logo2 from '../../images/logo2.png';
import styled from "styled-components";
import { useState } from "react";
import MypageModal from "./MypageModal"

const ListItem = styled.div `
    width: 260px;
    height: 40px;
    border: 1px solid #DADADA;
    border-radius: 20px;
    margin-top: 15px;
    padding: 7px;
`;

const ListModal = (props) => {

    const [cancelModal, setCancelModal] = useState(false);

    const cancelReservation = () => {
        console.log('예약이 취소되었습니다');
        setCancelModal(false);
        props.setList(false);
    } 

    return (
        <>
        <Background>
            <Window>
                <Popup>
                <Flex padding='20px'>
                    <Absolute right='15px'><img onClick={ ()=>{ props.setList(false) }} src={cancel} alt='cancel'/></Absolute>
                    <Subtitle size='22px' top='40px'>나의 예약 내역</Subtitle>
                    {/* 예약 내역이 없는 경우 */}
                    {/* <Subtitle size='16px' top='15px'>예약 내역이 없습니다!</Subtitle> */}
                    {/* 예약 내역이 있는 경우 */}
                    <ListItem>
                        <Subtitle size='14px'>1번 스터디룸</Subtitle>
                        <Subtitle size='17px'> 10:00-12:00</Subtitle>
                        <span onClick={()=> setCancelModal(true)} style={{ marginLeft: '7px', verticalAlign: 'middle' }}>
                            <img src={cancel_button} alt='cancel_button'/>
                        </span>
                    </ListItem>
                    <ListItem>
                        <Subtitle size='14px'>3번 스터디룸</Subtitle>
                        <Subtitle size='17px'> 12:00-14:00</Subtitle>
                        <span onClick={()=> setCancelModal(true)} style={{ marginLeft: '7px', verticalAlign: 'middle' }}>
                            <img src={cancel_button} alt='cancel_button'/>
                        </span>
                    </ListItem>
                    <ListItem>
                        <Subtitle size='14px'>2번 스터디룸</Subtitle>
                        <Subtitle size='17px'> 16:30-17:30</Subtitle>
                        <span onClick={()=> setCancelModal(true)} style={{ marginLeft: '7px', verticalAlign: 'middle' }}>
                            <img src={cancel_button} alt='cancel_button'/>
                        </span>
                    </ListItem>
                    {/* map 함수로 반복! */}
                    <img src={logo2} height="60" alt='logo2'/>
                </Flex>
                </Popup>
            </Window>
        </Background>
        { cancelModal === true ? 
            <MypageModal 
                setModal={setCancelModal} 
                setText={'예약취소'} 
                setAction = {cancelReservation}
            /> 
            : null 
        } 
        </>
    );
};

export default ListModal;