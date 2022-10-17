import styled from 'styled-components';

export const Container = styled.div`
   text-align: center;
   text-transform: uppercase;


   .container{
   padding: 2rem;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
   justify-content: space-around;
   font-size: 2rem;
   text-align: center;

      
      .poke{
         display: flex;
         justify-content: center;
         align-items: center;
         border: 1px solid red;
         width: 20rem;
         height: 3rem;
         margin:auto;
      }
      .poke:hover{
         border-color: blue;
      }
  }
`;