import styled from 'styled-components'


const Holder = styled.body`
  height: 100vh;
`

  const Container = styled.div`
  height: 100%;
 
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const PaneTop = styled.div`
  flex: ${props => props.weight};
  margin-top: 3rem;
  min-width: 85vw;
  height: 35%;
  border: darkgreen solid 2px;
`
const PaneBottom = styled.div`
  flex: ${props => props.weight};
  min-width: 85vw;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 65%;
  border: darkred solid 2px;
`

 const SplitScreen = ({ children,
         leftWeight,
         rightWeight})  => {

    const [left , right] = children
    return (
        <Holder>
            <Container>
                <PaneTop weight={leftWeight}>
                    {left}
                </PaneTop>
                <PaneBottom weight={rightWeight}>
                    {right}
                </PaneBottom>
            </Container>
        </Holder>
    )
}

export default SplitScreen