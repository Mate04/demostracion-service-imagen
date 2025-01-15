import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const Hero = styled.section`
  text-align: center;
  margin: 4rem 0;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  span {
    color: #FF00FF;
  }
`

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const StepCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 0.2rem;
    font-weight: bolder;
    font-size: 0.9rem;
  }
  span {
    color: #666;
    font-size: 0.9rem;
  }
`

export const Feature = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 6rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const FeatureContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`

export const FeatureImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`

export const InstantResults = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin: 6rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`