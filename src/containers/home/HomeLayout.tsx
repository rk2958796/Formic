// HomeLayout.tsx
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { IRequisitionDetails, IJobDetails, IInterViewSettings } from "../../interface/forms";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);
  const [requisitionDetails, setRequisitionDetails] = useState<IRequisitionDetails | undefined>(undefined);
  const [jobDetails, setJobDetails] = useState<IJobDetails | undefined>(undefined);
  const [interviewSettings, setInterviewSettings] = useState<IInterViewSettings | undefined>(undefined);

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  const handleRequisitionChange = (values: IRequisitionDetails) => {
    setRequisitionDetails(values);
  };

  const handleJobDetailsChange = (values: IJobDetails) => {
    setJobDetails(values);
  };

  const handleInterviewSettingsChange = (values: IInterViewSettings) => {
    setInterviewSettings(values);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requisition Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm handleTab={handlePage} onChange={handleRequisitionChange} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm handleTab={handlePage} onChange={handleJobDetailsChange} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm handleTab={handlePage} onChange={handleInterviewSettingsChange} />
              </TabPanel>
            </TabPanels>
            <DisplayCard requisitionDetails={requisitionDetails} jobDetails={jobDetails} interviewSettings={interviewSettings} />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
