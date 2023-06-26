import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Contact from '../components/Contact'
import Breadcrumb from "../components/BreadCrumb";

function ContactPage() {
    return (
        <div>
            <Navbar />
                <Breadcrumb
                    pageName="Contact Page"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
                    className=""
                />
                <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage;