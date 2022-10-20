import styled from 'styled-components';

export const Container = styled.div`
   min-height: 100vh;
   .header{
      text-align: center;
   }
   .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      margin:auto;
      padding:1rem;
      text-align: center;
      overflow: hidden;
      .favorites-icon{
         margin-top: 1rem;
         width: 2rem;
         height: 2rem;
      }
      .loading{
         width: 1rem;
         height: 1rem;
         border: 0.5rem solid #f0f0f0;
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
            /* margin-right: 0.5em; */
            text-align: right;
         }
         .poke-info{
            font-size: 1.2rem;
            text-align: left;

            h1{
               font-size: 3rem;
               font-weight: 400;
            }
         }
      }
      .container-favorite-icon{
         width: 3rem;
         height: 3rem;
         text-align: left;
         cursor: pointer;
      }
      .container-favorite-icon img:hover{
         box-shadow: 0px 2px 5px 2px #FFF;
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