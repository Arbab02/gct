
'use client'
import { motion } from "framer-motion";
import { Accordion } from "flowbite-react";

const AboutAccordian = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Our History</Accordion.Title>
                <Accordion.Content>
                  <p>
                    Founded in 2000, our company has grown from a small workshop
                    to a leading garment manufacturer.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Our Values</Accordion.Title>
                <Accordion.Content>
                  <p>
                    We value integrity, quality, and customer satisfaction above
                    all else.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Sustainability</Accordion.Title>
                <Accordion.Content>
                  <p>
                    We are committed to sustainable practices and reducing our
                    environmental impact.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
  )
}

export default AboutAccordian