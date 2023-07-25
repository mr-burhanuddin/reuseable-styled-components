import * as React from "react";
import { useState } from "react";
import "./styles.css";

import styled from "styled-components";
import CustomButton from "./components/CustomButton";
import CustomCard from "./components/CustomCard";
import CustomNavbar from "./components/CustomNavbar";
import CustomToggle from "./components/CustomToggle";
import CustomModal from "./components/CustomModal";
import CustomAlert from "./components/CustomAlert";
import CustomDropDown from "./components/CustomDropDown";
import CustomTabs from "./components/CustomTabs";
import CustomAccordion from "./components/CustomAccordion";
import CustomLoaderButton from "./components/CustomLoaderButton";
import CustomBadge from "./components/CustomBadge";
import CustomTextFeild from "./components/CustomTextFeild";

const AppWrapper = styled.div`
  max-width: 240rem;
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--app-bg-color);
  flex: 1;
  height: 100%;
`;

interface FormType {
  username: string;
  email: string;
  password: string;
}

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("tab1");
  const [form, setForm] = useState<FormType>({
    username: "",
    email: "",
    password: ""
  });
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleToggle = () => {
    setChecked(!checked);
    setTheme(() => {
      if (checked) {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  const dropdownoptions = [
    { value: "option1", label: "Option 1", icon: <>🌟</> },
    { value: "option2", label: "Option 2", icon: <>🌟</> },
    { value: "option3", label: "Option 3", icon: <>🌟</> }
  ];

  const handleDropdownChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
  };

  const tabs = [
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3" }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const [loading, setLoading] = useState(false);

  const dummyApiCall = () => {
    setLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      console.log("data", form);
      setLoading(false);
    }, 2000);
  };

  return (
    <div theme-type={theme} className="app">
      <CustomNavbar>
        <div className="navbar">
          <h3 className="logo">Reusables</h3>
          <ul className="navbarmenu">
            <CustomDropDown
              options={dropdownoptions}
              onChange={handleDropdownChange}
            />
            <CustomToggle checked={checked} onChange={handleToggle} />
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </CustomNavbar>
      <AppWrapper>
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onChangeTab={handleTabChange}
        />

        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}

        <CustomButton onClick={toggleModal}>Click Me</CustomButton>
        <CustomLoaderButton loading={loading} onClick={dummyApiCall}>
          Loader Button
        </CustomLoaderButton>
        <CustomTextFeild multiline rows={4} />
        <CustomTextFeild
          errorMessage="Something Went Wrong"
          required
          placeholder=""
          label="First Name"
          onChange={(e) => console.log(e.currentTarget.value)}
        />

        <CustomBadge variant="success" text="$" />
        <CustomBadge variant="error" text="12" />
        <CustomBadge variant="warning" text="1256" />
        <CustomCard>
          <div>
            <h3>Hi This Is Heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              libero eligendi officia. Cupiditate tempore temporibus porro
              labore dolorum neque reiciendis in eius odio. Aperiam, est
              corporis nobis numquam perspiciatis omnis.Odit, quam cum
              reprehenderit aspernatur quibusdam velit aut est asperiores fuga
              ab facere quaerat autem voluptas veniam corrupti dolore impedit
              sunt recusandae eligendi facilis laudantium consequuntur magnam
              illo blanditiis! Est!
            </p>
          </div>
        </CustomCard>
        <CustomModal open={openModal} onClose={toggleModal}>
          <h2>Fill The Form</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            laboriosam aut fugit sint! Voluptatibus, voluptatem illo quis qui
            aut fuga culpa eius voluptas soluta itaque assumenda repellendus
            praesentium illum debitis!
          </p>
        </CustomModal>
        <CustomAlert type="success">Success alert message</CustomAlert>
        <CustomAlert type="error">Error alert message</CustomAlert>
        <CustomAlert type="warning">Warning alert message</CustomAlert>
        <CustomAccordion title="Accordion 1">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quos
            veritatis distinctio minima, quasi odit aut ab ipsam perferendis
            impedit dolorem. Atque adipisci tempore reiciendis officia, rem
            minus dignissimos tenetur!Doloribus delectus, dolore numquam,
            exercitationem, maiores similique officia hic culpa incidunt quidem
            error illo natus vero dolorum ducimus dicta facilis voluptatem sunt.
            Dolorum mollitia ex exercitationem perspiciatis nostrum atque quo!
          </p>
        </CustomAccordion>
      </AppWrapper>
    </div>
  );
};

export default App;
