import styled, { keyframes } from 'styled-components';
export const Circle = styled.div`
filter: blur(60px);
    display: flex;
    width: 100%;
    height: 700px;
    .circle_1{
    position: relative;
    margin-top: 70px;
    margin-left: 250px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: rgb(85, 255, 0);
animation: circle_1 10s linear infinite ;

}
@keyframes circle_1{
    0%{
        transform: (0,0);
    }
    50%{
        transform: translate(300px,300px);
      
    }
    100%{
        transform: (0,0);
    }

    
}
.circle_2{
    position: relative;
    margin-top: 80px;
    margin-left: 50px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: rgb(203, 240, 14);
    animation: circle_1 25s linear infinite ;
}
.circle_3{
    position: relative;
    margin-top: 80px;
    margin-left: 50px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: rgb(14, 14, 240);
    animation: circle_1 25s linear infinite ;
  
}
.circle_4{
    position: relative;
    margin-top: 80px;
    margin-left: 50px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: rgb(240, 146, 14);
 
 animation: circle_4 10s linear infinite; 
}
@keyframes circle_4 {
    0%{
        transform: (0,0);
    }
    50%{
        transform: translate(-300px,200px);
      
    }
    100%{
        transform: (0,0);
    }  
}

.circle_5{
    position: relative;
    margin-top: 80px;
    margin-left: 50px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: rgb(240, 14, 67);
    animation: circle_4 20s linear infinite; 
  
}
.circle_6{
    position: relative;
    margin-top: 80px;
    margin-left: 50px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: rgb(14, 187, 240);
    animation: circle_4 25s linear infinite; 
  
}


`