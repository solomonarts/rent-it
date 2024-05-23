import React from "react";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";
import { RadioGroup, Radio, cn } from "@nextui-org/react";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

function SideFilter() {
  const [groupSelected, setGroupSelected] = React.useState([]);
  return (
    <div className="pr-4">
      <Accordion variant="light" className="shadow-lg p-2">
        <AccordionItem key="1" aria-label="Accordion 1" title="Amenities">
          <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup
              className="gap-1"
              label="Select amenities"
              orientation="horizontal"
              value={groupSelected}
              onChange={setGroupSelected}
            >
              <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
              <CustomCheckbox value="tv">Dstv cable</CustomCheckbox>
              <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
              <CustomCheckbox value="parking">Parking</CustomCheckbox>
              <CustomCheckbox value="pool">Pool</CustomCheckbox>
              <CustomCheckbox value="gym">Gym</CustomCheckbox>
            </CheckboxGroup>
            <p className="mt-4 ml-1 text-default-500">
              Selected: {groupSelected.join(", ")}
            </p>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Number of rooms">
          <CheckboxGroup label="Select cities" defaultValue={["1", "london"]}>
            <Checkbox value="1">1 Bedroom</Checkbox>
            <Checkbox value="2">2 Bedrooms</Checkbox>
            <Checkbox value="3">3 Bedrooms</Checkbox>
            <Checkbox value="4">4 Bedrooms</Checkbox>
            <Checkbox value="5">5+</Checkbox>
          </CheckboxGroup>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Property Type">
          <RadioGroup
            label="Property Type"
            description="Selected type can be changed at any time."
          >
            <CustomRadio description="Studio Rooms" value="studio">
              Studio
            </CustomRadio>
            <CustomRadio
              description="Full Stand alone home."
              value="stand-alone"
            >
              Stand Alone
            </CustomRadio>
            <CustomRadio
              description="Appartment Block setting."
              value="appartment"
            >
              Appartment
            </CustomRadio>
            <CustomRadio
              description="Semi-detatched appartments."
              value="semi-detatched"
            >
              Semi-detatched
            </CustomRadio>
          </RadioGroup>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 2"
          title="Facilities Nearby"
        >
          <CheckboxGroup
            label="Facilities"
            defaultValue={["medical", "Medical Facilities"]}
          >
            <Checkbox value="medical">Medical Facilities</Checkbox>
            <Checkbox value="fuel">Fuel Stations</Checkbox>
            <Checkbox value="gas">Gas Refill</Checkbox>
            <Checkbox value="shopping">Shopping Center</Checkbox>
            <Checkbox value="market">Market</Checkbox>
          </CheckboxGroup>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 3" title="Price Range">
          <Slider
            label="Price Range"
            step={50}
            minValue={0}
            maxValue={1000}
            defaultValue={[100, 500]}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="max-w-md"
          />
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 3"
          title="Distance from main road."
        >
          <Slider
            size="lg"
            label="Select a value"
            showTooltip={true}
            step={1}
            formatOptions={{ style: "decimal" }}
            maxValue={100}
            minValue={0}
            marks={[
              {
                value: 0.2,
                label: "20m",
              },
              {
                value: 0.5,
                label: "50m",
              },
              {
                value: 0.8,
                label: "80m",
              },
            ]}
            defaultValue={0.2}
            className="max-w-md"
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SideFilter;
