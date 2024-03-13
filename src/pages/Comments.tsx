import styled from "styled-components";
import StyledInput from "../components/StyledInput";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useEffect, useState } from "react";
import StyledCommentCard from '../components/comments/StyledCommentCard';
import StyledCommentUser from "../components/comments/StyledCommentUser";
import StyledCommentDate from "../components/comments/StyledCommentDate";
import StyledComment from "../components/comments/StyledComment";
import StyledTextArea from "../components/StyledInput";

const StyledForm = styled.form`

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
`;

const StyledBtnSubmit = styled.button`
   width: 200px;
   border-radius: 20px;
   padding: 20px;
   margin: 20px;
   text-align: center;
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

   const {
      data,
      //isLoading
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
      const newData = data?.map( ( comment : Comment ) => { return {...comment, date: new Date(`2024-${randomIntFromInterval(1,12)}-${randomIntFromInterval(1,31)}`)} } )
      setComments(newData)
   }, [data])

   return (
      <StyledContainerComment>
         <StyledForm onSubmit={(event: FormEvent) =>{handleOnSubmit(event)} }>
            <StyledP>Leave a comment:</StyledP>
            <StyledTextArea value={newComment} onChange={(e) => setNewCommemt(e.target.value) } rows={"5"} placeholder="Write here..."></StyledTextArea>
            <StyledBtnSubmit type="submit"  >
               Enviar comentario
            </StyledBtnSubmit>
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