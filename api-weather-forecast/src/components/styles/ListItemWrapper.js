import styled from 'styled-components'

export default styled.div`
  margin: ${props => props.space};
  padding: ${props => props.space};
  border-bottom: 1px solid #333;
`

export const WeatherIcon =  styled.i`
  font-size: 3rem;
  margin: 20px;
`