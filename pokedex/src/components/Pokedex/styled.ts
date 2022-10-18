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
         grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
         justify-content: center;
         gap: 1rem;
         padding:1rem;
         
         .poke-grid-item{
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            border-radius: 10px;
            padding: 1rem;
            font-size: 1.5rem;
         }
         .poke-grid-item:hover{
            transition: all 1s ease;
            transform: scale(1.1);
         }
      }
   }
 
`;