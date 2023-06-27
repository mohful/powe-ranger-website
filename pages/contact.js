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
                    description="Please do not hesitate to reach us at: "
                    className=""
                />
                <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage;