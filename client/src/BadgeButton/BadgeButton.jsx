import ArrowIcon from '../assets/arrow.svg';
import { BadgeButtonContainer } from './BadgeButton.style';

export function BadgeButton({onClick, text, reverse}) {
    return (
        <BadgeButtonContainer
            onClick={onClick}
            $reverse={reverse}
        >
            {text}
            <img src={ArrowIcon} alt={'->'}/>
        </BadgeButtonContainer>
    )
}