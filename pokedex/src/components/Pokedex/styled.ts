import styled from 'styled-components';

export const Container = styled.div`
   .container{
      width: 100%;
      height: auto;
      margin:0;
      padding:0;
      text-align: center;
      overflow: hidden;
      
      .poke-title{
         font-size: 2rem;
         padding: 1rem;
      }
      .poke-grid{
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
         justify-content: center;
         gap: 1rem;
         padding:1rem;
         
         .poke-grid-item{
            border: 1px solid blue;
            padding: 1rem;
         }
      }
   }
 
`;