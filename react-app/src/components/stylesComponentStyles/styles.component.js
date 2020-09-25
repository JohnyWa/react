import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 300px;
    border: 1px solid orange-color;
    flex-direction: column;
    align-items: center;
`;

Container.Title = styled.div`
    color: gray;
    display: flex;
    align-items: center;
    
    &:after {
      content: '';
      display: block;
      margin-left: 5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${props => props.status ? 'green' : 'red'};
    }
`;

Container.Img = styled.img`
  width: 100%
`;

Container.Edit = styled.button`
    border-radius: 5px;
    padding: 5px 25px;
    background-color: green;
    color: white;
`;

Container.Send = styled(Container.Edit)`
  background-color: orange;
`;

export default Container;

