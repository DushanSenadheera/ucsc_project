import {Accordion, AccordionSummary, AccordionDetails} from '../../style';
import { IconArrowDown as ExpandMoreIcon } from '@tabler/icons-react';

const details = [
    {
        id: 1,
        title: 'Local Attractions',
        content: "Discover the rich history and vibrant culture of [City/Location] with our curated list of local attractions. From renowned museums and historic landmarks to bustling markets and scenic parks, there's always something new to explore."
    },
    {
        title: 'Exciting Tours and Excursions',
        content: "Embark on exciting adventures with our expertly guided tours and excursions. Whether you're interested in exploring hidden gems, tasting local cuisine, or embarking on a thrilling outdoor adventure, we have something to suit every interest."
    },
    {
        title: 'Cultural Experiences',
        content: "Immerse yourself in the local culture with our exclusive experiences. Attend traditional performances, participate in local festivals, or join a hands-on workshop to learn about the region's unique arts and crafts."
    },
    {
        title: 'Nature and Adventure',
        content: "For those seeking an outdoor escape, explore the natural beauty of the surrounding landscapes. Hike scenic trails, take a leisurely bike ride, or simply relax by the beach or lake. Our location offers a perfect balance of tranquility and adventure."
    },
    {
        title: 'Wellness and Relaxation',
        content: "Rejuvenate your senses with our wellness and relaxation activities. Enjoy yoga sessions, meditate in serene gardens, or indulge in a spa day. Our wellness offerings are designed to help you unwind and find inner peace."
    }
]

export default function ExploreAccordion() {
    return (
        <div>
            {
                details.map((detail, index) => {
                    return (
                        <Accordion key={index} defaultExpanded={detail.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon size={'1rem'}/>}
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
