import "regenerator-runtime";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

import StyledCommentCard from '../components/comments/StyledCommentCard';
import StyledCommentUser from "../components/comments/StyledCommentUser";
import StyledCommentDate from "../components/comments/StyledCommentDate";
import StyledComment from "../components/comments/StyledComment";
import StyledInput from "../components/StyledInput";
import { SvgBackArrow, SvgHalfHeart, SvgHeart } from "../components/Svgs";
import StyledButton from "../components/StyledButton";

const StyledForm = styled.form`
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
`;

const StyledContainerSecondary = styled.div`
   display: flex;
   flex-direction: column;
   gap: 32px;
`;

const StyledCommentsContainer = styled.div`
   margin-top: 32px;
   gap: 32px;
`;

const StyledContainerHeart = styled.form`
   display: flex;
   gap: 8px;
   padding: 32px 0px;
`

const StyledContainerComment = styled.p`
   padding: 20px 20%;

   @media (max-width: 678px) {
      padding: 20px 32px;
   }
`;

const StyledP = styled.p`
   color: ${(props) => props.theme.text};
   font-family: "Playfair";  
   display: flex;
   font-weight: 500;
   font-style: normal;
`;

const StyledTextCounter = styled.p`
   color: ${(props) => props.theme.text};
   font-family: "Playfair Display";  
   font-weight: 600;
   font-style: normal;
   font-size: 24px;
`;

const StyledTextApple = styled.span`
   color: ${(props) => props.theme.text};
   font-family: "Playfair Display";
   font-size: 32px;
   font-style: normal;
   font-weight: 600;
   line-height: 40px;
`

interface Comment {
   postId?: number
   id?: number
   name?: string
   email?: string
   body?: string
   date?: Date
}

const Comments = () => {
   //Speech recognition hook
   const { text, setText, stopListening, isListening, startListening, hasRecognitionSupport } = useSpeechRecognition();

   //Get a random number
   const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
   }

   let post_id = randomIntFromInterval(1, 10);
   const fetchComments = async () => await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`).then((res) => res.json())

   const navigate = useNavigate();

   const {
      data,
   } = useQuery({ queryKey: ['comments'], queryFn: fetchComments })

   const [comments, setComments] = useState<Comment[]>(data || [])
   const totalComments = comments ? Object.keys(comments).length : 0;

   // const [newComment, setNewComment] = useState<string>('')

   const handleOnSubmit = (event: FormEvent) => {
      event.preventDefault();
      setComments([
         {
            postId: comments[0].id,
            id: 500,
            email: 'hi@pluralresearch.org',
            body: `${text}`,
            date: new Date(),
         },
         ...comments
      ])
      setText('')
   }

   useEffect(() => {
      const newData = data?.map((comment: Comment) => { return { ...comment, date: new Date(`2024-${randomIntFromInterval(1, 12)}-${randomIntFromInterval(1, 31)}`) } })
      setComments(newData)
   }, [data])

   return (
      <StyledContainerComment>
         <StyledContainerSecondary >
            <SvgBackArrow handleclick={() => navigate(`/`)} />
            <StyledTextApple>
               Do you like apples?
            </StyledTextApple>
            <StyledContainerHeart>
               <SvgHeart />
               <SvgHeart />
               <SvgHeart />
               <SvgHeart />
               <SvgHalfHeart />
            </StyledContainerHeart>
         </StyledContainerSecondary>

         <StyledForm onSubmit={(event: FormEvent) => { handleOnSubmit(event) }}>
            <StyledP>Leave a comment:</StyledP>
            <StyledInput value={text} onChange={(e) => setText(e.target.value ? e.target.value : text)} placeholder="Write here..."></StyledInput>

            {hasRecognitionSupport ? (
               <StyledButton type="button" onClick={!isListening ? startListening : stopListening}>{isListening ? 'Stop recording' : 'Start recording'}</StyledButton>
            ) : <></>}
         </StyledForm>

         <StyledCommentsContainer>
            <StyledTextCounter>Total comments ({totalComments})</StyledTextCounter>
            {comments?.map((comment) =>
               <StyledCommentCard key={comment.id}>
                  <StyledCommentUser>
                     {comment.email}
                  </StyledCommentUser>
                  <StyledCommentDate>
                     {`${comment?.date?.toLocaleDateString()}`}
                  </StyledCommentDate>
                  <StyledComment>
                     {comment.body}
                  </StyledComment>
               </StyledCommentCard>
            )}
         </StyledCommentsContainer>

      </StyledContainerComment>
   )
}

export default Comments;