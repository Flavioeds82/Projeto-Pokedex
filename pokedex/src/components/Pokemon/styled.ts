import styled from 'styled-components';

export const Container = styled.div`
   min-height: 100vh;
   .header{
      text-align: center;
   }
   .container{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      margin:0;
      padding:1rem;
      text-align: center;
      overflow: hidden;
      .loading{
         width: 1rem;
         height: 1rem;
         border: 1rem solid #f0f0f0;
         border-left-color: #3D9DFD;
         border-radius: 50%;
         margin: auto;
         transition: all 1s ease;
         animation: loading 2s linear infinite;
      }
      .poke-picture{
         transition: all 1s ease;
         width:90%;
         overflow: hidden;
      }
      .poke-picture img{
         width: 200px;
      }
      .poke-content{
         display: flex;
         .poke-label{
            font-size: 1.2rem;
            font-weight: bold;
            margin-right: 0.5em;
         }
         .poke-info{
            font-size: 1.2rem;

            h1{
               font-size: 3rem;
               font-weight: 400;
            }
         }
      }
   }
   @keyframes loading {
      0% {
     transform: rotate(0deg);
      }
      100% {
      transform: rotate(360deg);
      }
   }
   
`;