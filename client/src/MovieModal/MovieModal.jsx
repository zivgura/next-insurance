import { Box, Modal } from '@mui/material';
import { ContentSection, PhotoSection } from './MovieModal.style';

export function MovieModal({movie, open, onClose}){
    return(
        <Modal open={open} onClose={onClose}>
            <Box>
                <PhotoSection>

                </PhotoSection>
                <ContentSection>

                </ContentSection>
            </Box>
        </Modal>
    )
}