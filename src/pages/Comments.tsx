import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import StyledCommentCard from '../components/comments/StyledCommentCard';
import StyledCommentUser from "../components/comments/StyledCommentUser";
import StyledCommentDate from "../components/comments/StyledCommentDate";
import StyledComment from "../components/comments/StyledComment";
import StyledTextArea from "../components/StyledInput";
import { SvgBackArrow, SvgHalfHeart, SvgHeart } from "../components/Svgs";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
   display: flex;
   flex-wrap: wrap;
   flex-direction: column
`

const StyledContainerSecondary = styled.div`
   display: flex;
   flex-direction: column;
   gap:32px
`

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
    font-family: Playfair;  
    display: flex;

`;

const StyledBtnSubmit = styled.button`
   width: 200px;
   border-radius: 20px;
   padding: 20px;
   margin: 20px;
   display: flex;
   justify-content: center;
`

const StyledTextApple = styled.span`
   color: ${(props) => props.theme.text};
   font-family: "Playfair Display";
   font-size: 32px;
   font-style: normal;
   font-weight: 600;
   line-height: 40px;
`

const StyledContainerBtn = styled.div`
   display: flex;
   justify-content: center
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
   const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
   }

   let post_id = randomIntFromInterval(1, 10);
   const fetchProjects = async () => await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`).then((res) => res.json())

   const navigate = useNavigate();
   
   const {
      data,
   } = useQuery({ queryKey: ['todos'], queryFn: fetchProjects })

   const [comments, setComments] = useState<Comment[]>(data || [])

   const [newComment, setNewCommemt] = useState<string>()

   const handleOnSubmit = (event: FormEvent) => {
      event.preventDefault();
      console.info("newComment", newComment)
      setComments([
         {
            postId: comments[0].id,
            id: 500,
            email: 'email@dominio.com',
            body: `${newComment}`,
            date: new Date(),
         },
         ...comments
      ])
      setNewCommemt('')
   }

   useEffect(() => {
      const newData = data?.map((comment: Comment) => { return { ...comment, date: new Date(`2024-${randomIntFromInterval(1, 12)}-${randomIntFromInterval(1, 31)}`) } })
      setComments(newData)
   }, [data])

   return (
      <StyledContainerComment>

         <StyledContainerSecondary >
            <SvgBackArrow handleclick={() => navigate(`/`)}/>
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
            <StyledTextArea value={newComment} onChange={(e) => setNewCommemt(e.target.value)} rows={5} placeholder="Write here..."></StyledTextArea>
            <StyledContainerBtn >
               <StyledBtnSubmit type="submit"  >
                  Enviar comentario
               </StyledBtnSubmit>
            </StyledContainerBtn>
         </StyledForm>
         <br /><br /><br />
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
      </StyledContainerComment>
   )
}

export default Comments;