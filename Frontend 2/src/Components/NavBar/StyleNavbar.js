import styled from "styled-components";
import { Link } from 'react-router';


export const NavBar = styled.nav`
display: flex; /* Equivale a flex */
align-items: center; /* Equivale a items-center */
justify-content: space-between; /* Equivale a justify-between */
padding: 1rem; /* Equivale a p-4 */
padding-left: 1.5rem; /* Equivale a px-6 */
padding-right: 1.5rem; /* Equivale a px-6 */
`

export const SecctionLeft = styled.section`
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Equivale a gap-2 */
`

export const Icon = styled.div`
    height: 2rem; /* Equivale a h-8 */
    width: 2rem; /* Equivale a w-8 */
`
export const IconSvg = styled.svg`
    height: 2rem; /* Equivale a h-8 */
    width: 2rem; /* Equivale a w-8 */
    color: #7c3aed; /* Equivale a text-purple-600 */
`

export const Title = styled.span`
    font-size: 1.25rem; /* Equivale a text-xl */
    font-weight: 600; /* Equivale a font-semibold */
`

//NavMiddler

export const SecctionCenter = styled.div`
    display: none;
    align-items: center;
    gap: 2rem; /* Equivale a gap-8 */
    @media (min-width: 768px) {
        display: flex; /* Equivale a md:flex */
    }
`

export const LinkTo = styled(Link)`
    color: #4b5563; /* Equivale a text-gray-600 */
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover{
        color: #1f2937; /* Equivale a hover:text-gray-900 */
    }
`

export const SecctionRight= styled.section`
    display: flex;
    align-items: center;
    gap: 1rem; /* Equivale a gap-4 */
`

export const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem; /* Tailwind's default rounding */
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`
export const GhostButton = styled(Button)`
    background: none;
    color: #4b5563; /* Gray-600 */

    &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #1f2937; /* Gray-900 */
    }
`

export const PrimaryButton = styled(Button)`
    background: #7c3aed; /* Purple */
    color: white;

    &:hover {
        background: #5b21b6; /* Darker purple */
    }
`;

