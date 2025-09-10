import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaFilePdf, FaFileWord, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SecureUploads.css";

export default function SecureUploads() {
  const [folders, setFolders] = useState({});
  const [activeFolder, setActiveFolder] = useState("");
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    useEffect(() => {
    const data = {
      "Annual Reports": [
        { name: "ACTIVITY REPORT.docx", path: "/docs/Annual Reports/ACTIVITY REPORT.docx" },
        { name: "Annual Report 2013-14.doc", path: "/docs/Annual Reports/Annual Repoart 2013-14.doc" },
        { name: "Annual Report-2010.pdf", path: "/docs/Annual Reports/Annual Report-2010.pdf" },
        { name: "Annual Report-2012-13.pdf", path: "/docs/Annual Reports/Annual Report-2012-13.pdf" },
        { name: "FAITH May-July 2024.pdf", path: "/docs/Annual Reports/FAITH 20  May 2024 -21 July 2024.pdf" },
        { name: "Faith Report-2022-23.docx", path: "/docs/Annual Reports/Faith Report-2022-23.docx" },
        { name: "Taleemi_Jamaat.docx", path: "/docs/Annual Reports/Taleemi_Jamaat.docx" },
      ],
        "Bank related": [
        {
            "name": "Account Details_Faith.pdf",
            "path": "/docs/Bank related/Account Details_Faith.pdf"
        },
        {
            "name": "bank latter.docx",
            "path": "/docs/Bank related/bank latter.docx"
        },
        {
            "name": "Faith account-2023-2024.docx",
            "path": "/docs/Bank related/Faith account-2023-2024.docx"
        },
        {
            "name": "Faith letter to Bank.pdf",
            "path": "/docs/Bank related/Faith letter to Bank.pdf"
        },
        {
            "name": "FAITH QR Code @indianbk.pdf",
            "path": "/docs/Bank related/FAITH QR Code @indianbk.pdf"
        },
        {
            "name": "Indian bank account documents.docx",
            "path": "/docs/Bank related/Indian bank account documents.docx"
        },
        {
            "name": "Payments 2023-24.xlsx",
            "path": "/docs/Bank related/Payments 2023-24.xlsx"
        },
        {
            "name": "StatementOfAccount_30561661742_Apr18_093818.pdf",
            "path": "/docs/Bank related/StatementOfAccount_30561661742_Apr18_093818.pdf"
        },
        {
            "name": "StatementOfAccount_30561661742_Feb07_123943 (1).csv",
            "path": "/docs/Bank related/StatementOfAccount_30561661742_Feb07_123943 (1).csv"
        },
        {
            "name": "StatementOfAccount_30561661742_Feb07_123943.csv",
            "path": "/docs/Bank related/StatementOfAccount_30561661742_Feb07_123943.csv"
        },
        {
            "name": "StatementOfAccount_30561661742_Feb07_125034 (1).csv",
            "path": "/docs/Bank related/StatementOfAccount_30561661742_Feb07_125034 (1).csv"
        },
        {
            "name": "StatementOfAccount_30561661742_Feb07_125034.csv",
            "path": "/docs/Bank related/StatementOfAccount_30561661742_Feb07_125034.csv"
        },
        {
            "name": "StatementOfAccount_30561661742_Jun13_175430.pdf",
            "path": "/docs/Bank related/StatementOfAccount_30561661742_Jun13_175430.pdf"
        },
        {
            "name": "StatementOfAccount_7499885029_16062024_164203.pdf",
            "path": "/docs/Bank related/StatementOfAccount_7499885029_16062024_164203.pdf"
        },
        {
            "name": "StatementOfAccount_7499885029_18042025_093908.pdf",
            "path": "/docs/Bank related/StatementOfAccount_7499885029_18042025_093908.pdf"
        }
    ],
    "Budget": [
        {
            "name": "Budget-IMSEA.docx",
            "path": "/docs/Budget/Budget-IMSEA.docx"
        }
    ],
    "Elections": [
        {
            "name": "Election Governing body 2021 .docx",
            "path": "/docs/Elections/Election Governing body 2021 .docx"
        }
    ],
    "Employees related records": [
        {
            "name": "agreement FAITH.docx",
            "path": "/docs/Employees related records/agreement FAITH.docx"
        },
        {
            "name": "Agreement Letter 2024.docx",
            "path": "/docs/Employees related records/Agreement Letter 2024.docx"
        },
        {
            "name": "Agreement Letters 2024.docx",
            "path": "/docs/Employees related records/Agreement Letters 2024.docx"
        },
        {
            "name": "Degree.pdf",
            "path": "/docs/Employees related records/Degree.pdf"
        },
        {
            "name": "FAITH EMPLOYEES.docx",
            "path": "/docs/Employees related records/FAITH EMPLOYEES.docx"
        },
        {
            "name": "FAITH Voucher.docx",
            "path": "/docs/Employees related records/FAITH Voucher.docx"
        },
        {
            "name": "HAMRAAH Expense  Voucher (1).docx",
            "path": "/docs/Employees related records/HAMRAAH Expense  Voucher (1).docx"
        },
        {
            "name": "HAMRAAH Expense  Voucher.docx",
            "path": "/docs/Employees related records/HAMRAAH Expense  Voucher.docx"
        },
        {
            "name": "Hamrah Proposal.docx",
            "path": "/docs/Employees related records/Hamrah Proposal.docx"
        },
        {
            "name": "Saharanpur Agreements with staff...docx",
            "path": "/docs/Employees related records/Saharanpur Agreements with staff...docx"
        },
        {
            "name": "Saharanpur Agreements with staff1...docx",
            "path": "/docs/Employees related records/Saharanpur Agreements with staff1...docx"
        }
    ],
    "FAITH Audit-2023-24": [
        {
            "name": "Audit 2019.pdf",
            "path": "/docs/FAITH Audit-2023-24/Audit 2019.pdf"
        },
        {
            "name": "Audit 2020.pdf",
            "path": "/docs/FAITH Audit-2023-24/Audit 2020.pdf"
        },
        {
            "name": "Audit 2021.pdf",
            "path": "/docs/FAITH Audit-2023-24/Audit 2021.pdf"
        },
        {
            "name": "BS_PL_RP_22.pdf",
            "path": "/docs/FAITH Audit-2023-24/BS_PL_RP_22.pdf"
        },
        {
            "name": "BS_PL_RP_23_merged.pdf",
            "path": "/docs/FAITH Audit-2023-24/BS_PL_RP_23_merged.pdf"
        },
        {
            "name": "DocScanner 23-Nov-2024 12-25 PM.pdf",
            "path": "/docs/FAITH Audit-2023-24/DocScanner 23-Nov-2024 12-25 PM.pdf"
        },
        {
            "name": "DocScanner 25-Nov-2024 02-33 PM-1.pdf",
            "path": "/docs/FAITH Audit-2023-24/DocScanner 25-Nov-2024 02-33 PM-1.pdf"
        },
        {
            "name": "DocScanner 25-Nov-2024 02-33 PM.pdf",
            "path": "/docs/FAITH Audit-2023-24/DocScanner 25-Nov-2024 02-33 PM.pdf"
        },
        {
            "name": "Faith Society ITR-2024-2025.pdf",
            "path": "/docs/FAITH Audit-2023-24/Faith Society ITR-2024-2025.pdf"
        },
        {
            "name": "Faith Society.pdf",
            "path": "/docs/FAITH Audit-2023-24/Faith Society.pdf"
        },
        {
            "name": "Form_pdf_687449400081124.pdf",
            "path": "/docs/FAITH Audit-2023-24/Form_pdf_687449400081124.pdf"
        }
    ],
    "Faith Documents": [
        {
            "name": "Amended FAITH.pdf",
            "path": "/docs/Faith Documents/Amended FAITH.pdf"
        },
        {
            "name": "Election Governing body 2024.docx",
            "path": "/docs/Faith Documents/Election Governing body 2024.docx"
        },
        {
            "name": "FAITH CERTIFICATE-2020.jpg",
            "path": "/docs/Faith Documents/FAITH CERTIFICATE-2020.jpg"
        },
        {
            "name": "Faith documents.pdf",
            "path": "/docs/Faith Documents/Faith documents.pdf"
        },
        {
            "name": "FAITH Office.docx",
            "path": "/docs/Faith Documents/FAITH Office.docx"
        },
        {
            "name": "FAITH Reg. Cert..jpg",
            "path": "/docs/Faith Documents/FAITH Reg. Cert..jpg"
        },
        {
            "name": "Faith Society PAN Number AAAAF1617P.docx",
            "path": "/docs/Faith Documents/Faith Society PAN Number AAAAF1617P.docx"
        },
        {
            "name": "FAITH Stamp.docx",
            "path": "/docs/Faith Documents/FAITH Stamp.docx"
        },
        {
            "name": "MEMBERS OF THE GOVERNING BODY -.docx",
            "path": "/docs/Faith Documents/MEMBERS OF THE GOVERNING BODY -.docx"
        },
        {
            "name": "MEMBERS OF THE GOVERNING BODY Signed - Relected.pdf",
            "path": "/docs/Faith Documents/MEMBERS OF THE GOVERNING BODY Signed - Relected.pdf"
        },
        {
            "name": "Membership Form.doc",
            "path": "/docs/Faith Documents/Membership Form.doc"
        },
        {
            "name": "PAN CARD.pdf",
            "path": "/docs/Faith Documents/PAN CARD.pdf"
        },
        {
            "name": "Profile-FAITH.docx",
            "path": "/docs/Faith Documents/Profile-FAITH.docx"
        },
        {
            "name": "Project Proposal (1).docx",
            "path": "/docs/Faith Documents/Project Proposal (1).docx"
        }
    ],
    "FAITH_STAMP": [
        {
            "name": "round seel.JPG",
            "path": "/docs/Faith Documents/FAITH_STAMP/round seel.JPG"
        },
        {
            "name": "seel.JPG",
            "path": "/docs/Faith Documents/FAITH_STAMP/seel.JPG"
        },
        {
            "name": "Sig_MJ.JPG",
            "path": "/docs/Faith Documents/FAITH_STAMP/Sig_MJ.JPG"
        },
        {
            "name": "Thumbs.db",
            "path": "/docs/Faith Documents/FAITH_STAMP/Thumbs.db"
        }
    ],
    "Faith_Bye Laws": [
        {
            "name": "Bye Laws 1.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye Laws 1.pdf"
        },
        {
            "name": "Bye Laws 2.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye Laws 2.pdf"
        },
        {
            "name": "Bye Laws 3.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye Laws 3.pdf"
        },
        {
            "name": "Bye Laws 4.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye Laws 4.pdf"
        },
        {
            "name": "Bye Laws 5.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye Laws 5.pdf"
        },
        {
            "name": "Bye laws 6.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye laws 6.pdf"
        },
        {
            "name": "Bye laws 7.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye laws 7.pdf"
        },
        {
            "name": "Bye laws 8.pdf",
            "path": "/docs/FCRA/Faith_Bye Laws/Bye laws 8.pdf"
        }
    ],
    "FCRA": [
        {
            "name": "ACTIVITY REPORT.docx",
            "path": "/docs/FCRA/ACTIVITY REPORT.docx"
        },
        {
            "name": "ACTIVITY REPORT.pdf",
            "path": "/docs/FCRA/ACTIVITY REPORT.pdf"
        },
        {
            "name": "Annual Repoarts 2012-15.doc",
            "path": "/docs/FCRA/Annual Repoarts 2012-15.doc"
        },
        {
            "name": "Annual Repoarts 2012-15.pdf",
            "path": "/docs/FCRA/Annual Repoarts 2012-15.pdf"
        },
        {
            "name": "Audit Report 2015.pdf",
            "path": "/docs/FCRA/Audit Report 2015.pdf"
        },
        {
            "name": "FCRA APPLICATION.docx",
            "path": "/docs/FCRA/FCRA APPLICATION.docx"
        },
        {
            "name": "MEMBERS OF FAITH- .docx",
            "path": "/docs/FCRA/MEMBERS OF FAITH- .docx"
        },
        {
            "name": "MEMBERS OF THE GOVERNING BODY - Relected.docx",
            "path": "/docs/FCRA/MEMBERS OF THE GOVERNING BODY - Relected.docx"
        },
        {
            "name": "MEMBERS OF THE GOVERNING BODY.docx",
            "path": "/docs/FCRA/MEMBERS OF THE GOVERNING BODY.docx"
        },
        {
            "name": "Registeration Certificate.pdf",
            "path": "/docs/FCRA/Registeration Certificate.pdf"
        },
        {
            "name": "round seal.JPG",
            "path": "/docs/FCRA/round seal.JPG"
        },
        {
            "name": "seal.JPG",
            "path": "/docs/FCRA/seal.JPG"
        },
        {
            "name": "Sig_MJ.JPG",
            "path": "/docs/FCRA/Sig_MJ.JPG"
        },
        {
            "name": "~$nual Repoarts 2012-15.doc",
            "path": "/docs/FCRA/~$nual Repoarts 2012-15.doc"
        }
    ],
    "Audit Report 2013": [
        {
            "name": "Audit REeport 2013 (3).pdf",
            "path": "/docs/FCRA/Audit Report 2013/Audit REeport 2013 (3).pdf"
        },
        {
            "name": "Audit Report 2013 (2).pdf",
            "path": "/docs/FCRA/Audit Report 2013/Audit Report 2013 (2).pdf"
        },
        {
            "name": "Audit Report 2013 (4).pdf",
            "path": "/docs/FCRA/Audit Report 2013/Audit Report 2013 (4).pdf"
        },
        {
            "name": "Audit Report 2013 (5).pdf",
            "path": "/docs/FCRA/Audit Report 2013/Audit Report 2013 (5).pdf"
        },
        {
            "name": "Audit Report 2013(1).pdf",
            "path": "/docs/FCRA/Audit Report 2013/Audit Report 2013(1).pdf"
        }
    ],
    "Audit Report-2014": [
        {
            "name": "Audit report 2013-14-1.pdf",
            "path": "/docs/FCRA/Audit Report-2014/Audit report 2013-14-1.pdf"
        },
        {
            "name": "Audit report 2013-14-2.pdf",
            "path": "/docs/FCRA/Audit Report-2014/Audit report 2013-14-2.pdf"
        },
        {
            "name": "Audit Report 2013-14-3.pdf",
            "path": "/docs/FCRA/Audit Report-2014/Audit Report 2013-14-3.pdf"
        },
        {
            "name": "Audit report 2013-14-4.pdf",
            "path": "/docs/FCRA/Audit Report-2014/Audit report 2013-14-4.pdf"
        },
        {
            "name": "Audit Report-2013-14-5.pdf",
            "path": "/docs/FCRA/Audit Report-2014/Audit Report-2013-14-5.pdf"
        }
    ],
    "Governing Body": [
        {
            "name": "MEMBERS OF THE FAITH.docx",
            "path": "/docs/Governing Body/MEMBERS OF THE FAITH.docx"
        }
    ],
    "Hamrah": [
        {
            "name": "1.pdf",
            "path": "/docs/Hamrah/1.pdf"
        },
        {
            "name": "2.pdf",
            "path": "/docs/Hamrah/2.pdf"
        },
        {
            "name": "3.pdf",
            "path": "/docs/Hamrah/3.pdf"
        },
        {
            "name": "4.pdf",
            "path": "/docs/Hamrah/4.pdf"
        },
        {
            "name": "5.pdf",
            "path": "/docs/Hamrah/5.pdf"
        },
        {
            "name": "6.pdf",
            "path": "/docs/Hamrah/6.pdf"
        },
        {
            "name": "7.pdf",
            "path": "/docs/Hamrah/7.pdf"
        },
        {
            "name": "8.pdf",
            "path": "/docs/Hamrah/8.pdf"
        },
        {
            "name": "9.pdf",
            "path": "/docs/Hamrah/9.pdf"
        },
        {
            "name": "Affidavit IMS.docx",
            "path": "/docs/Hamrah/Affidavit IMS.docx"
        },
        {
            "name": "Agreements with HAMRAAH Foundation (1).docx",
            "path": "/docs/Hamrah/Agreements with HAMRAAH Foundation (1).docx"
        },
        {
            "name": "Agreements with HAMRAAH Foundation -Lucknow 2.docx",
            "path": "/docs/Hamrah/Agreements with HAMRAAH Foundation -Lucknow 2.docx"
        },
        {
            "name": "Agreements with HAMRAAH Foundation Lucknow.docx",
            "path": "/docs/Hamrah/Agreements with HAMRAAH Foundation Lucknow.docx"
        },
        {
            "name": "Agreements with HAMRAAH Foundation.docx",
            "path": "/docs/Hamrah/Agreements with HAMRAAH Foundation.docx"
        },
        {
            "name": "Copy of HAMRAAH FORMAT FOR REIMBURSEMENT.xlsx",
            "path": "/docs/Hamrah/Copy of HAMRAAH FORMAT FOR REIMBURSEMENT.xlsx"
        },
        {
            "name": "HF UTZ 1 march 19 to 28-02-2020 (1).xls",
            "path": "/docs/Hamrah/HF UTZ 1 march 19 to 28-02-2020 (1).xls"
        },
        {
            "name": "HF UTZ 1 march 19 to 28-02-2020.xls",
            "path": "/docs/Hamrah/HF UTZ 1 march 19 to 28-02-2020.xls"
        },
        {
            "name": "IME Society Document.doc",
            "path": "/docs/Hamrah/IME Society Document.doc"
        },
        {
            "name": "IMESA funds availability (2).xls",
            "path": "/docs/Hamrah/IMESA funds availability (2).xls"
        },
        {
            "name": "Lucknow.docx",
            "path": "/docs/Hamrah/Lucknow.docx"
        },
        {
            "name": "Offer Letter.docx",
            "path": "/docs/Hamrah/Offer Letter.docx"
        },
        {
            "name": "SaharanpurProject19-20.docx",
            "path": "/docs/Hamrah/SaharanpurProject19-20.docx"
        },
        {
            "name": "Scanned_20200318-1703.pdf",
            "path": "/docs/Hamrah/Scanned_20200318-1703.pdf"
        },
        {
            "name": "Voucher.jpg",
            "path": "/docs/Hamrah/Voucher.jpg"
        }
    ],
    "final files": [
        {
            "name": "Agreements with Furqan.docx",
            "path": "/docs/Hamrah/final files/Agreements with Furqan.docx"
        },
        {
            "name": "Agreements with Irfan.docx",
            "path": "/docs/Hamrah/final files/Agreements with Irfan.docx"
        },
        {
            "name": "Agreements with Rohila Fatima.docx",
            "path": "/docs/Hamrah/final files/Agreements with Rohila Fatima.docx"
        },
        {
            "name": "Agreements with Saleem.docx",
            "path": "/docs/Hamrah/final files/Agreements with Saleem.docx"
        },
        {
            "name": "Agreements with Shahana.docx",
            "path": "/docs/Hamrah/final files/Agreements with Shahana.docx"
        },
        {
            "name": "Copy of HAMRAAH FORMAT FOR REIMBURSEMENT.xlsx",
            "path": "/docs/Hamrah/final files/Copy of HAMRAAH FORMAT FOR REIMBURSEMENT.xlsx"
        },
        {
            "name": "HAMRAAH FORMAT FOR REIMBURSEMENT.xlsx",
            "path": "/docs/Hamrah/final files/HAMRAAH FORMAT FOR REIMBURSEMENT.xlsx"
        },
        {
            "name": "IMESA funds availability (2).xls",
            "path": "/docs/Hamrah/final files/IMESA funds availability (2).xls"
        },
        {
            "name": "IMESA funds availability.xls",
            "path": "/docs/Hamrah/final files/IMESA funds availability.xls"
        }
    ],
    "IDs": [
        {
            "name": "A S S Documents Apr-2021.pdf",
            "path": "/docs/IDs/A S S Documents Apr-2021.pdf"
        },
        {
            "name": "A S Siddiquie ID.pdf",
            "path": "/docs/IDs/A S Siddiquie ID.pdf"
        },
        {
            "name": "Arshad ID.pdf",
            "path": "/docs/IDs/Arshad ID.pdf"
        },
        {
            "name": "Audit Report 2014-15.pdf",
            "path": "/docs/IDs/Audit Report 2014-15.pdf"
        },
        {
            "name": "Governing Body Members.pdf",
            "path": "/docs/IDs/Governing Body Members.pdf"
        },
        {
            "name": "Iffat ID.docx",
            "path": "/docs/IDs/Iffat ID.docx"
        },
        {
            "name": "Iffat ID.pdf",
            "path": "/docs/IDs/Iffat ID.pdf"
        },
        {
            "name": "Majid Jamil ID.pdf",
            "path": "/docs/IDs/Majid Jamil ID.pdf"
        },
        {
            "name": "Mansoor ID.pdf",
            "path": "/docs/IDs/Mansoor ID.pdf"
        },
        {
            "name": "Registeration Certificate.pdf",
            "path": "/docs/IDs/Registeration Certificate.pdf"
        },
        {
            "name": "Rizwan Aadhar card.docx",
            "path": "/docs/IDs/Rizwan Aadhar card.docx"
        },
        {
            "name": "Rizwan ID.pdf",
            "path": "/docs/IDs/Rizwan ID.pdf"
        }
    ],
    "Documents Shamshar and Rana": [
        {
            "name": "Sahzad Aadhar.jpeg",
            "path": "/docs/IDs/Documents Shamshar and Rana/Sahzad Aadhar.jpeg"
        },
        {
            "name": "Sahzad Aadhar1.jpeg",
            "path": "/docs/IDs/Documents Shamshar and Rana/Sahzad Aadhar1.jpeg"
        },
        {
            "name": "Sahzad Pan Card.jpeg",
            "path": "/docs/IDs/Documents Shamshar and Rana/Sahzad Pan Card.jpeg"
        },
        {
            "name": "Sahzad Pan Card1.jpeg",
            "path": "/docs/IDs/Documents Shamshar and Rana/Sahzad Pan Card1.jpeg"
        },
        {
            "name": "Shamshad Ali Aadhaar Card.pdf",
            "path": "/docs/IDs/Documents Shamshar and Rana/Shamshad Ali Aadhaar Card.pdf"
        },
        {
            "name": "Shamshad Pan Card.jpeg",
            "path": "/docs/IDs/Documents Shamshar and Rana/Shamshad Pan Card.jpeg"
        }
    ],
    "IMESA": [
        {
            "name": "Feedback Form.docx",
            "path": "/docs/IMESA/IMESA/Feedback Form.docx"
        },
        {
            "name": "Feedback Form.pdf",
            "path": "/docs/IMESA/IMESA/Feedback Form.pdf"
        },
        {
            "name": "IMESA Saharanpur Quarterly Project Status Attendance Report - October 23.docx",
            "path": "/docs/IMESA/IMESA/IMESA Saharanpur Quarterly Project Status Attendance Report - October 23.docx"
        },
        {
            "name": "IMESA Saharanpur Quarterly Project Status Performance Report - October 23-.docx",
            "path": "/docs/IMESA/IMESA/IMESA Saharanpur Quarterly Project Status Performance Report - October 23-.docx"
        },
        {
            "name": "IMESA Saharanpur Quarterly Project Status Report - 300123 (1).docx",
            "path": "/docs/IMESA/IMESA/IMESA Saharanpur Quarterly Project Status Report - 300123 (1).docx"
        },
        {
            "name": "IMESA Saharanpur Quarterly Project Status Report - 300423.docx",
            "path": "/docs/IMESA/IMESA/IMESA Saharanpur Quarterly Project Status Report - 300423.docx"
        },
        {
            "name": "IMG-20230618-WA0005.jpg",
            "path": "/docs/IMESA/IMESA/IMG-20230618-WA0005.jpg"
        },
        {
            "name": "IMG-20230618-WA0006 (3).jpg",
            "path": "/docs/IMESA/IMESA/IMG-20230618-WA0006 (3).jpg"
        },
        {
            "name": "Minutes Talimi Bedari-.docx",
            "path": "/docs/IMESA/IMESA/Minutes Talimi Bedari-.docx"
        },
        {
            "name": "Presentation1.pptx",
            "path": "/docs/IMESA/IMESA/Presentation1.pptx"
        },
        {
            "name": "Registeration Form.docx",
            "path": "/docs/IMESA/IMESA/Registeration Form.docx"
        },
        {
            "name": "Saharanpur Agreements with staff...pdf",
            "path": "/docs/IMESA/IMESA/Saharanpur Agreements with staff...pdf"
        },
        {
            "name": "Saharanpur Library.docx",
            "path": "/docs/IMESA/IMESA/Saharanpur Library.docx"
        },
        {
            "name": "Sample Report..docx",
            "path": "/docs/IMESA/IMESA/Sample Report..docx"
        },
        {
            "name": "Staff- Saharanpur Centre-July 2023.docx",
            "path": "/docs/IMESA/IMESA/Staff- Saharanpur Centre-July 2023.docx"
        },
        {
            "name": "Staff- Saharanpur Centre.docx",
            "path": "/docs/IMESA/IMESA/Staff- Saharanpur Centre.docx"
        },
        {
            "name": "Vision & Mission.docx",
            "path": "/docs/IMESA/IMESA/Vision & Mission.docx"
        }
    ],
    "IMESA Oct 2023": [
        {
            "name": "IMESA Saharanpur Quarterly Project Status Report - 300123 (1).docx",
            "path": "/docs/IMESA/IMESA Oct 2023/IMESA Saharanpur Quarterly Project Status Report - 300123 (1).docx"
        },
        {
            "name": "librarydocuments.zip",
            "path": "/docs/IMESA/IMESA Oct 2023/librarydocuments.zip"
        }
    ],
    "Meeting Minutes": [
        {
            "name": "4 March 2024 Meeting Notice.docx",
            "path": "/docs/Meeting Minutes/4 March 2024 Meeting Notice.docx"
        },
        {
            "name": "GBM 2021 .docx",
            "path": "/docs/Meeting Minutes/GBM 2021 .docx"
        },
        {
            "name": "Minutes 14 March 2021.docx",
            "path": "/docs/Meeting Minutes/Minutes 14 March 2021.docx"
        }
    ],
    "Others": [
        {
            "name": "Article Higher education.docx",
            "path": "/docs/Others/Article Higher education.docx"
        },
        {
            "name": "Bye- Laws.Constitution of JTA.pdf",
            "path": "/docs/Others/Bye- Laws.Constitution of JTA.pdf"
        },
        {
            "name": "Muslim Vision.pdf",
            "path": "/docs/Others/Muslim Vision.pdf"
        },
        {
            "name": "muslimplan-cover.doc",
            "path": "/docs/Others/muslimplan-cover.doc"
        },
        {
            "name": "Muslims status.docx",
            "path": "/docs/Others/Muslims status.docx"
        },
        {
            "name": "Thanks-Faith.doc",
            "path": "/docs/Others/Thanks-Faith.doc"
        },
        {
            "name": "UPES  internship_completion_certificate.pdf",
            "path": "/docs/Others/UPES  internship_completion_certificate.pdf"
        },
        {
            "name": "FAITH WEBSITE.docx",
            "path": "/docs/Others/FAITH WEBSITE.docx"
        }
    ],
    "Reports": [
        {
            "name": "Account Details_Faith.pdf",
            "path": "/docs/Reports/Account Details_Faith.pdf"
        },
        {
            "name": "Annual Report-2010.pdf",
            "path": "/docs/Reports/Annual Report-2010.pdf"
        },
        {
            "name": "ASudit report 2012-3.pdf",
            "path": "/docs/Reports/ASudit report 2012-3.pdf"
        },
        {
            "name": "Audit report 2012-1.pdf",
            "path": "/docs/Reports/Audit report 2012-1.pdf"
        },
        {
            "name": "Audit report 2012-4.pdf",
            "path": "/docs/Reports/Audit report 2012-4.pdf"
        },
        {
            "name": "Audit report 2013-14-1.pdf",
            "path": "/docs/Reports/Audit report 2013-14-1.pdf"
        },
        {
            "name": "Audit report 2013-14-2.pdf",
            "path": "/docs/Reports/Audit report 2013-14-2.pdf"
        },
        {
            "name": "Audit Report 2013-14-3.pdf",
            "path": "/docs/Reports/Audit Report 2013-14-3.pdf"
        },
        {
            "name": "Audit report 2013-14-4.pdf",
            "path": "/docs/Reports/Audit report 2013-14-4.pdf"
        },
        {
            "name": "Audit Report 2015.pdf",
            "path": "/docs/Reports/Audit Report 2015.pdf"
        },
        {
            "name": "Audit Report-2013-14-5.pdf",
            "path": "/docs/Reports/Audit Report-2013-14-5.pdf"
        },
        {
            "name": "Bye Laws 1.pdf",
            "path": "/docs/Reports/Bye Laws 1.pdf"
        },
        {
            "name": "Bye Laws 2.pdf",
            "path": "/docs/Reports/Bye Laws 2.pdf"
        },
        {
            "name": "Bye Laws 3.pdf",
            "path": "/docs/Reports/Bye Laws 3.pdf"
        },
        {
            "name": "Bye Laws 4.pdf",
            "path": "/docs/Reports/Bye Laws 4.pdf"
        },
        {
            "name": "Bye Laws 5.pdf",
            "path": "/docs/Reports/Bye Laws 5.pdf"
        },
        {
            "name": "Bye laws 6.pdf",
            "path": "/docs/Reports/Bye laws 6.pdf"
        },
        {
            "name": "Bye laws 7.pdf",
            "path": "/docs/Reports/Bye laws 7.pdf"
        },
        {
            "name": "Bye laws 8.pdf",
            "path": "/docs/Reports/Bye laws 8.pdf"
        },
        {
            "name": "Registeration Certificate_Faith.pdf",
            "path": "/docs/Reports/Registeration Certificate_Faith.pdf"
        },
        {
            "name": "Report 2021.docx",
            "path": "/docs/Reports/Report 2021.docx"
        }
    ],
    "Audit Report 2011": [
        {
            "name": "Audit 2011 faith (1).docx",
            "path": "/docs/Reports/Audit Report 2011/Audit 2011 faith (1).docx"
        },
        {
            "name": "Audit 2011 faith 2.docx",
            "path": "/docs/Reports/Audit Report 2011/Audit 2011 faith 2.docx"
        },
        {
            "name": "Audit 2011 faith _1_.pdf",
            "path": "/docs/Reports/Audit Report 2011/Audit 2011 faith _1_.pdf"
        },
        {
            "name": "Audit 2011 faith.docx",
            "path": "/docs/Reports/Audit Report 2011/Audit 2011 faith.docx"
        },
        {
            "name": "Audit 2011 faith.pdf",
            "path": "/docs/Reports/Audit Report 2011/Audit 2011 faith.pdf"
        },
        {
            "name": "Audit faith 2011   3.docx",
            "path": "/docs/Reports/Audit Report 2011/Audit faith 2011   3.docx"
        },
        {
            "name": "Audit faith 2011   3.pdf",
            "path": "/docs/Reports/Audit Report 2011/Audit faith 2011   3.pdf"
        },
        {
            "name": "Audit report 2011 faith.docx",
            "path": "/docs/Reports/Audit Report 2011/Audit report 2011 faith.docx"
        },
        {
            "name": "Audit report 2011 faith.pdf",
            "path": "/docs/Reports/Audit Report 2011/Audit report 2011 faith.pdf"
        }
    ],
    "Audit report 2012": [
        {
            "name": "Audit report 2012-1.pdf",
            "path": "/docs/Reports/Audit report 2012/Audit report 2012-1.pdf"
        },
        {
            "name": "Audit report 2012-3.pdf",
            "path": "/docs/Reports/Audit report 2012/Audit report 2012-3.pdf"
        },
        {
            "name": "Audit report 2012-4.pdf",
            "path": "/docs/Reports/Audit report 2012/Audit report 2012-4.pdf"
        },
        {
            "name": "Audit report-2012-2.pdf",
            "path": "/docs/Reports/Audit report 2012/Audit report-2012-2.pdf"
        }
    ],
    "Students related": [
        {
            "name": "Announcement-2025.docx",
            "path": "/docs/Students related/Announcement-2025.docx"
        },
        {
            "name": "Annual Report Card-2024-25.xlsx",
            "path": "/docs/Students related/Annual Report Card-2024-25.xlsx"
        },
        {
            "name": "FAITH Library Student Report Card..pdf",
            "path": "/docs/Students related/FAITH Library Student Report Card..pdf"
        },
        {
            "name": "Madarsa Studen List.pdf",
            "path": "/docs/Students related/Madarsa Studen List.pdf"
        },
        {
            "name": "Registeration for-Talimi Jamaat.docx",
            "path": "/docs/Students related/Registeration for-Talimi Jamaat.docx"
        },
        {
            "name": "Registeration Form.docx",
            "path": "/docs/Students related/Registeration Form.docx"
        },
        {
            "name": "Report Card-2023",
            "path": "/docs/Students related/Report Card-2023"
        },
        {
            "name": "Report Card-2024-25.docx",
            "path": "/docs/Students related/Report Card-2024-25.docx"
        },
        {
            "name": "Report Card.docx",
            "path": "/docs/Students related/Report Card.docx"
        },
        {
            "name": "Students report",
            "path": "/docs/Students related/Students report"
        }
    ],
    "Vision & Mission": [
        {
            "name": "Library Project Saharanpur.docx",
            "path": "/docs/Vision & Mission/Library Project Saharanpur.docx"
        }
    ],
    "XII Class related": [
        {
            "name": "Announcement-2025.docx",
            "path": "/docs/XII Class related/Announcement-2025.docx"
        },
        {
            "name": "DOC-20241225-WA0011..xlsx",
            "path": "/docs/XII Class related/DOC-20241225-WA0011..xlsx"
        },
        {
            "name": "Guru Nanak-SRE-DATA 2024 CLASS 12 - Muslim.xls",
            "path": "/docs/XII Class related/Guru Nanak-SRE-DATA 2024 CLASS 12 - Muslim.xls"
        },
        {
            "name": "Guru Nanak-SRE-DATA 2024 CLASS 12.xls",
            "path": "/docs/XII Class related/Guru Nanak-SRE-DATA 2024 CLASS 12.xls"
        },
        {
            "name": "IMG-20250101-WA0048.jpg",
            "path": "/docs/XII Class related/IMG-20250101-WA0048.jpg"
        },
        {
            "name": "Registeration for-Talimi Jamaat.docx",
            "path": "/docs/XII Class related/Registeration for-Talimi Jamaat.docx"
        },
        {
            "name": "Registeration for-Talimi Jamaat.pdf",
            "path": "/docs/XII Class related/Registeration for-Talimi Jamaat.pdf"
        },
        {
            "name": "Registeraton performa.docx",
            "path": "/docs/XII Class related/Registeraton performa.docx"
        },
        {
            "name": "University_Prospectus_2025-2026_jmientrance.pdf",
            "path": "/docs/XII Class related/University_Prospectus_2025-2026_jmientrance.pdf"
        }
    ]
    };
    setFolders(data);
    setActiveFolder(Object.keys(data)[0]); 
  }, []);
   return (
    <>
      <Navbar />
      <div className="uploads-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Folders</h3>
          {Object.keys(folders).map((folder) => (
            <span
              key={folder}
              className={`folder-link ${activeFolder === folder ? "active" : ""}`}
              onClick={() => setActiveFolder(folder)}
            >
              {folder}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="uploads-header">
            <h2>{activeFolder}</h2>
            {/* <Link to="/" className="home-link"><FaHome /> Home</Link> */}
          </div>

          <div className="files-grid">
            {folders[activeFolder]?.map((file, index) => (
              <div key={index} className="file-card" onClick={() => window.open(file.path, "_blank")}>
                {file.name.endsWith(".pdf") ? (
                  <FaFilePdf className="file-icon pdf" />
                ) : (
                  <FaFileWord className="file-icon word" />
                )}
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}