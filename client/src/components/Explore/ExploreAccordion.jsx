import { Accordion, AccordionSummary, AccordionDetails } from '../../style';
import details from './detail';
import { IconArrowDown as ExpandMoreIcon } from '@tabler/icons-react';

export default function ExploreAccordion() {
    return (
        <div>
            {
                details.map((detail, index) => {
                    return (
                        <Accordion key={index} defaultExpanded={detail.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon size={'1rem'} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {detail.title}
                            </AccordionSummary>
                            <AccordionDetails>
                                {detail.content}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}
