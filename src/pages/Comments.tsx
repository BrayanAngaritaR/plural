import styled from "styled-components";
import StyledInput from "../components/StyledInput";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import StyledCommentCard from '../components/comments/StyledCommentCard';
import StyledCommentUser from "../components/comments/StyledCommentUser";
import StyledCommentDate from "../components/comments/StyledCommentDate";
import StyledComment from "../components/comments/StyledComment";


const StyledP = styled.p`
    margin: 0px;
    color: ${(props) => props.theme.text};
    font-family: Playfair;
    max-width: 720px;
    padding: 0px 25vw;
    
    @media (max-width: 678px) {
      padding: 0px 32px;
   }
`;

interface Comment {
   postId: number
   id: number
   name: string
   email: string
   body: string
}


const Comments = () => {

   const fetchProjects = async () => await fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then((res) => res.json())

   const {
      data,
      isLoading
   } = useQuery({ queryKey: ['todos'], queryFn: fetchProjects })

   const [comments, setComments] = useState<Comment[]>(data || [])

   useEffect(() => {
      setComments(data)
   }, [data])

   return (
      <>
         <StyledP>Leave a comment:</StyledP>
         <StyledInput placeholder="Write here"></StyledInput>
         <br /><br /><br />
         {comments?.map((comment) =>
            <StyledCommentCard key={comment.id}>
               <StyledCommentUser>
                  {comment.email}
               </StyledCommentUser>
               <StyledCommentDate>
                  FECHA
               </StyledCommentDate>
               <StyledComment>
                  {comment.body}
               </StyledComment>
            </StyledCommentCard>

         )}
      </>
   )
}

export default Comments;