import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloudDownloadAlt, FaDropbox, FaRegCalendarPlus, FaRegEdit } from "react-icons/fa";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import Anchor from "../../components/anchor";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserField } from "../../store/slices/userSlice";
import clsx from "clsx";

const MyAccount = () => {
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [citizenId, setCitizenId] = useState("");
  const [ethnic, setEthnic] = useState("");
  const [religion, setReligion] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [nationality, setNationality] = useState("Viet Nam");
  const [residence, setResidence] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [priorityArea, setPriorityArea] = useState("");
  const [priorityObject, setPriorityObject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [highSchool1Id, setHighSchool1Id] = useState("");
  const [highSchool2Id, setHighSchool2Id] = useState("");
  const [highSchool3Id, setHighSchool3Id] = useState("");
  const [previewFront, setPreviewFront] = useState(null);
  const [previewBack, setPreviewBack] = useState(null);
  const [error, setError] = useState("");
  const [nationalImageFront, setnationalImageFront] = useState("");
  const [nationalImageBack, setnationalImageBack] = useState("");

  const accountId = useSelector((state) => state.login.accountId);
  const handleSubmit = async () => {
    const formData = {
      account_id: accountId,
      full_name: fullName,
      date_of_birth: birthday,
      gender_id: gender,
      birth_place: birthPlace,
      citizen_id: citizenId,
      ethnic: ethnic,
      religion: religion,
      nationality: nationality,
      residence: residence,
      address: address,
      current_address: currentAddress,
      priority_area: priorityArea,
      priority_object: priorityObject,
      phone_number: phoneNumber,
      email: email,
      graduation_year: graduationYear,
      national_image_front: nationalImageFront,
      national_image_back: nationalImageBack,
      high_school1_id: highSchool1Id,
      high_school2_id: highSchool2Id,
      high_school3_id: highSchool3Id,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/insertuser",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
      setError("An error occurred while submitting the form");
    }
  };

  const [math1, setMath1] = useState();
  const [math2, setMath2] = useState();
  const [math3, setMath3] = useState();
  const [math4, setMath4] = useState();
  const [math5, setMath5] = useState();
  const [math6, setMath6] = useState();

  const [physics1, setPhysics1] = useState();
  const [physics2, setPhysics2] = useState();
  const [physics3, setPhysics3] = useState();
  const [physics4, setPhysics4] = useState();
  const [physics5, setPhysics5] = useState();
  const [physics6, setPhysics6] = useState();

  const [chemistry1, setChemistry1] = useState();
  const [chemistry2, setChemistry2] = useState();
  const [chemistry3, setChemistry3] = useState();
  const [chemistry4, setChemistry4] = useState();
  const [chemistry5, setChemistry5] = useState();
  const [chemistry6, setChemistry6] = useState();

  const [english1, setEnglish1] = useState();
  const [english2, setEnglish2] = useState();
  const [english3, setEnglish3] = useState();
  const [english4, setEnglish4] = useState();
  const [english5, setEnglish5] = useState();
  const [english6, setEnglish6] = useState();

  const handleSubmitApplicationScores = async (
    subjectId,
    gradeId,
    semester_id,
    score
  ) => {
    const formData = {
      account_id: accountId,
      subject_id: subjectId,
      grade_id: gradeId,
      semester_id: semester_id,
      score: score,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/application/insertapplicationcores",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
      setError("An error occurred while submitting the form");
    }
  };

  const handleSubmitApplicationScoresAll = async () => {
    handleSubmitApplicationScores(1, 1, 1, math1);
    handleSubmitApplicationScores(1, 1, 2, math2);
    handleSubmitApplicationScores(1, 2, 1, math3);
    handleSubmitApplicationScores(1, 2, 2, math4);
    handleSubmitApplicationScores(1, 3, 1, math5);
    handleSubmitApplicationScores(1, 3, 2, math6);

    handleSubmitApplicationScores(2, 1, 1, physics1);
    handleSubmitApplicationScores(2, 1, 2, physics2);
    handleSubmitApplicationScores(2, 2, 1, physics3);
    handleSubmitApplicationScores(2, 2, 2, physics4);
    handleSubmitApplicationScores(2, 3, 1, physics5);
    handleSubmitApplicationScores(2, 3, 2, physics6);

    handleSubmitApplicationScores(3, 1, 1, chemistry1);
    handleSubmitApplicationScores(3, 1, 2, chemistry2);
    handleSubmitApplicationScores(3, 2, 1, chemistry3);
    handleSubmitApplicationScores(3, 2, 2, chemistry4);
    handleSubmitApplicationScores(3, 3, 1, chemistry5);
    handleSubmitApplicationScores(3, 3, 2, chemistry6);

    handleSubmitApplicationScores(4, 1, 1, english1);
    handleSubmitApplicationScores(4, 1, 2, english2);
    handleSubmitApplicationScores(4, 2, 1, english3);
    handleSubmitApplicationScores(4, 2, 2, english4);
    handleSubmitApplicationScores(4, 3, 1, english5);
    handleSubmitApplicationScores(4, 3, 2, english6);
  };

  const [dataUser, setDataUser] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/getuser/${accountId}`
      );
      setDataUser(response.data.data);
      console.log(response.data);
      setFullName(dataUser.full_name);
      setBirthday(dataUser.date_of_birth);
      setGender(dataUser.gender_id);
      setBirthPlace(dataUser.birth_place);
      setCitizenId(dataUser.citizen_id);
      setEthnic(dataUser.ethnic);
      setReligion(dataUser.religion);
      setNationality(dataUser.nationality);
      setResidence(dataUser.residence);
      setAddress(dataUser.address);
      setCurrentAddress(dataUser.current_address);
      setPriorityArea(dataUser.priority_area);
      setPriorityObject(dataUser.priority_object);
      setPhoneNumber(dataUser.phone_number);
      setEmail(dataUser.email);
      setGraduationYear(dataUser.graduation_year);
      setnationalImageFront(dataUser.national_image_front);
      setnationalImageBack(dataUser.national_image_back);
      s;
      setHighSchool1Id(dataUser.high_school1_id);
      setHighSchool2Id(dataUser.high_school2_id);
      setHighSchool3Id(dataUser.high_school3_id);
    } catch (error) {
      console.error("There was an error!", error);
      setError("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [frontIdCard, setFrontIdCard] = useState(null);
  const [backIdCard, setBackIdCard] = useState(null);

  const handleFileChange = (file, type) => {
    if (type === "front") {
      setFrontIdCard(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewFront(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (type === "back") {
      setBackIdCard(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewBack(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImg = async () => {
    try {
      const account_id = "12345";
      const custom_name_front = "front_image";
      const custom_name_back = "back_image";

      const frontExtension = frontIdCard.name.split(".").pop();
      const backExtension = backIdCard.name.split(".").pop();

      const frontIdCardFileName1 = new File(
        [frontIdCard],
        `${account_id}_${custom_name_front}${"."}${frontExtension}`,
        {
          type: frontIdCard.type,
        }
      );

      const formData1 = new FormData();
      formData1.append("file", frontIdCardFileName1);

      const backIdCardFileName2 = new File(
        [backIdCard],
        `${account_id}_${custom_name_back}${"."}${backExtension}`,
        {
          type: backIdCard.type,
        }
      );

      const formData2 = new FormData();
      formData2.append("file", backIdCardFileName2);

      const response1 = await axios.post(
        "http://localhost:8080/api/ftp/upload",
        formData1,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response1.data);

      const response2 = await axios.post(
        "http://localhost:8080/api/ftp/upload",
        formData2,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response2.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [preview4, setPreview4] = useState(null);

  const handleFileChangeTranscript = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      switch (index) {
        case 1:
          setFile1(file);
          setPreview1(reader.result);
          break;
        case 2:
          setFile2(file);
          setPreview2(reader.result);
          break;
        case 3:
          setFile3(file);
          setPreview3(reader.result);
          break;
        case 4:
          setFile4(file);
          setPreview4(reader.result);
          break;
        default:
          break;
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitImgCords = async () => {
    debugger;

    try {
      const account_id = "12345";

      const custom_name = [
        "FirstPageOfTheTranscript",
        "Class10Transcript",
        "Class11Transcript",
        "Class12Transcript",
      ];

      const files = [file1, file2, file3, file4];

      const uploadFile = async (file, name) => {
        const extension = file.name.split(".").pop();
        const fileName = new File(
          [file],
          `${account_id}_${name}.${extension}`,
          {
            type: file.type,
          }
        );
        const formData = new FormData();
        formData.append("file", fileName);
        const response = await axios.post(
          "http://localhost:8080/api/ftp/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
      };

      for (let i = 0; i < files.length; i++) {
        if (files[i]) {
          await uploadFile(files[i], custom_name[i]);
        }
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <LayoutTwo>
      <BreadcrumbOne
        pageTitle="My Account"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
        
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Home </Anchor>
          </li>

          <li>My Account</li>
        </ul>
      </BreadcrumbOne>
      <div className="my-account-area space-mt--r130 space-mb--r130">
        <Container>
          <Tab.Container defaultActiveKey="dashboard">
            <Nav
              variant="pills"
              className="my-account-area__navigation space-mb--r60"
            >
              <Nav.Item>
                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="userinfo">Thông tin cá nhân</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="usercords">Điểm xét tuyển</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="wishList">Đăng ký nguyện vọng</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accountDetails">Thông tin tài khoản</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <div className="my-account-area__content">
                  <h3>Dashboard</h3>
                  <div className="welcome">
                    <p>
                      Hello, <strong>John Doe</strong> (If Not{" "}
                      <strong>John !</strong>{" "}
                      <Anchor path="/other/login-register" className="logout">
                        Logout
                      </Anchor>
                      )
                    </p>
                  </div>
                  <p>Hồ sơ đang chờ được duyệt</p>
                  <h3>Thông tin đăng ký</h3>
                  <table className="table table-bordered">
                    <thead className="thead-light">
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Cập nhật thông tin cá nhân</td>
                        <td>Xong</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Cập nhật ảnh chứng minh CCCD</td>
                        <td>Xong</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Cập nhật điểm xét tuyển</td>
                        <td>Xong</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Cập nhật Ảnh chứng minh điểm học bạ</td>
                        <td>Xong</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Đăng ký nguyện vọng</td>
                        <td>Xong</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="userinfo">
                <div className="my-account-area__content">
                  <h3>Cập nhật thông tin</h3>
                  <div className="lezada-form login-form">
                    <form>
                      <Row>
                        <div className="my-account-area__content">
                          <h3>Thông tin cá nhân</h3>
                          <div className="account-details-form">
                            <form>
                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="full-name"
                                      className="required"
                                    >
                                      Họ và tên
                                    </label>
                                    <input
                                      value={fullName}
                                      type="text"
                                      id="full-name"
                                      placeholder="Nhập họ và tên (viết hoa)"
                                      onChange={(e) => {
                                        setFullName(e.target.value);
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Số CMND/CCCD
                                    </label>
                                    <input
                                      value={citizenId}
                                      type="text"
                                      id="last-name"
                                      placeholder="Nhập số CCCd/CMND "
                                      onChange={(e) => {
                                        setCitizenId(e.target.value);
                                      }}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Nơi sinh
                                    </label>
                                    <input
                                      value={birthPlace}
                                      type="text"
                                      id="last-name"
                                      placeholder="Nơi sinh tỉnh/thành phố"
                                      onChange={(e) => {
                                        setBirthPlace(e.target.value);
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="birth-day"
                                      className="required"
                                    >
                                      Ngày/tháng/năm sinh
                                    </label>
                                    <input
                                      value={birthday}
                                      type="date"
                                      id="birth-day"
                                      placeholder=""
                                      onChange={(e) => {
                                        setBirthday(e.target.value);
                                      }}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="ethnic"
                                      className="required"
                                    >
                                      dân tộc
                                    </label>
                                    <input
                                      value={ethnic}
                                      type="text"
                                      id="ethnic"
                                      placeholder="Chọn dân tộc"
                                      onChange={(e) => {
                                        setEthnic(e.target.value);
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="gender"
                                      className="required"
                                    >
                                      Giới tính
                                    </label>
                                    <div
                                      class="single-icon filter-dropdown"
                                      id="gender"
                                    >
                                      <select className="custom-select"
                                        onChange={(e) =>
                                          setGender(e.target.value)
                                        }
                                        value={gender}
                                      >
                                        <option value="">Chọn giới tính</option>
                                        <option
                                          value="1"
                                          onClick={() => setGender(1)}
                                        >
                                          Nam
                                        </option>
                                        <option
                                          value="2"
                                          onClick={() => setGender(1)}
                                        >
                                          Nữ
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Tôn giáo
                                    </label>
                                    <input
                                      value={religion}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setReligion(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Quốc tịch
                                    </label>
                                    <input
                                      value={residence}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setResidence(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Nơi ở thuòng trú
                                    </label>
                                    <input
                                      value={address}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setAddress(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Nơi ở hiện tại
                                    </label>
                                    <input
                                      value={currentAddress}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setCurrentAddress(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Khu vực ưu tiên
                                    </label>
                                    <input
                                      value={priorityArea}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setPriorityArea(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Đối tượng ưu tiên
                                    </label>
                                    <input
                                      value={priorityObject}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setPriorityObject(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Năm tốt nghiệp
                                    </label>
                                    <input
                                      value={graduationYear}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setGraduationYear(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Số điện thoại
                                    </label>
                                    <input
                                      value={phoneNumber}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                      }
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="single-input-item">
                                    <label
                                      htmlFor="last-name"
                                      className="required"
                                    >
                                      Email
                                    </label>
                                    <input
                                      value={email}
                                      type="text"
                                      id="last-name"
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Col>
                                <div className="my-account-area__content">
                                  <h3>Thông tin đăng ký</h3>
                                  <div className="myaccount-table table-responsive text-center">
                                    <table className="table table-bordered">
                                      <thead className="thead-light">
                                        <tr>
                                          <th>STT</th>
                                          <th>Lớp</th>
                                          <th>Trường</th>
                                          <th>Mã tỉnh</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Lớp 10</td>
                                          <td>
                                            <input
                                              type="text"
                                              id="ma-truong-10"
                                              name="ma-truong-10"
                                              className="input-small"
                                              placeholder="Mã trường"
                                              onChange={(e) => {
                                                setHighSchool1Id(
                                                  e.target.value
                                                );
                                              }}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              id="ma-tinh-10"
                                              name="ma-tinh-10"
                                              className="input-small"
                                              placeholder="Mã Tỉnh"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Lớp 11</td>
                                          <td>
                                            <input
                                              type="text"
                                              id="ma-truong-11"
                                              name="ma-truong-11"
                                              className="input-small"
                                              placeholder="Mã trường"
                                              onChange={(e) => {
                                                setHighSchool2Id(
                                                  e.target.value
                                                );
                                              }}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              id="ma-tinh-11"
                                              name="ma-tinh-11"
                                              className="input-small"
                                              placeholder="Mã Tỉnh"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>Lớp 12</td>
                                          <td>
                                            <input
                                              type="text"
                                              id="ma-truong-12"
                                              name="ma-truong-12"
                                              className="input-small"
                                              placeholder="Mã trường"
                                              onChange={(e) => {
                                                setHighSchool3Id(
                                                  e.target.value
                                                );
                                              }}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="text"
                                              id="ma-tinh-12"
                                              name="ma-tinh-12"
                                              className="input-small"
                                              placeholder="Mã Tỉnh"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </Col>

                              <Row>
                                <div className="my-account-area__content">
                                  <h3>Ảnh chứng minh 2 mặt CMND/CCCD</h3>
                                  <div className="myaccount-table table-responsive text-center">
                                    <table className="table table-bordered">
                                      <thead className="thead-light">
                                        <tr>
                                          <th>STT</th>
                                          <th>Mặt CCCD</th>

                                          <th>Chọn hình</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Mặt trước CCCD/CMND</td>
                                          <td>
                                            <tr>
                                              <input
                                                accept=".jpg, .jpeg, .png"
                                                type="file"
                                                onChange={(e) =>
                                                  handleFileChange(
                                                    e.target.files[0],
                                                    "front"
                                                  )
                                                }
                                              />
                                            </tr>
                                            <tr>
                                              {previewFront && (
                                                <img
                                                  src={previewFront}
                                                  alt="Preview"
                                                  style={{
                                                    width: "200px",
                                                    height: "150px",
                                                  }}
                                                />
                                              )}
                                            </tr>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Mặt sau CCCD/CMND</td>

                                          <td>
                                            <tr>
                                              <input
                                                type="file"
                                                accept=".jpg, .jpeg, .png"
                                                onChange={(e) =>
                                                  handleFileChange(
                                                    e.target.files[0],
                                                    "back"
                                                  )
                                                }
                                              />
                                            </tr>

                                            <tr>
                                              {previewBack && (
                                                <img
                                                  src={previewBack}
                                                  alt="Preview"
                                                  style={{
                                                    width: "200px",
                                                    height: "150px",
                                                  }}
                                                />
                                              )}
                                            </tr>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </Row>
                            </form>
                          </div>
                        </div>

                        <Col lg={12} className="space-mb--30">
                          {/* <button type="button" onClick={handleLogin}>Login
                    </button> */}
                          <button
                            className="lezada-button lezada-button--medium"
                            type="button"
                            onClick={() => {
                              handleSubmit();
                              //handleSubmitImg();
                            }}
                          >
                            Lưu thông tin
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="usercords">
                <div className="my-account-area__content">
                  <h3>Đăng kí thông tin xét tuyển</h3>
                  <div className="lezada-form login-form">
                    <form>
                      <Row>
                        <Row>
                          <Col>
                            <div className="my-account-area__content">
                              <h3>Điểm xét tuyển</h3>
                              <div className="myaccount-table table-responsive text-center">
                                <table className="table table-bordered">
                                  <thead className="thead-light">
                                    <tr>
                                      <th>STT</th>
                                      <th>Môn</th>
                                      <th>Điểm TB HK1 lớp 10</th>
                                      <th>Điểm TB HK2 lớp 10</th>
                                      <th>Điểm TB HK1 lớp 11</th>
                                      <th>Điểm TB HK2 lớp 11</th>
                                      <th>Điểm TB HK1 lớp 12</th>
                                      <th>Điểm TB HK2 lớp 12</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Toán</td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject1"
                                          name="subject1"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setMath1(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject1"
                                          name="subject1"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setMath2(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject1"
                                          name="subject1"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setMath3(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject1"
                                          name="subject1"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setMath4(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject1"
                                          name="subject1"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setMath5(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject1"
                                          name="subject1"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setMath6(e.target.value);
                                          }}
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Lý</td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject2"
                                          name="subject2"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setPhysics1(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject2"
                                          name="subject2"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setPhysics2(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject2"
                                          name="subject2"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setPhysics3(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject2"
                                          name="subject2"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setPhysics4(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject2"
                                          name="subject2"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setPhysics5(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject2"
                                          name="subject2"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setPhysics6(e.target.value);
                                          }}
                                        />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Hóa</td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setChemistry1(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setChemistry2(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setChemistry3(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setChemistry4(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setChemistry5(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setChemistry6(e.target.value);
                                          }}
                                        />
                                      </td>
                                    </tr>

                                    <tr>
                                      <td>4</td>
                                      <td>Anh</td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setEnglish1(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setEnglish2(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setEnglish3(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setEnglish4(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setEnglish5(e.target.value);
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="subject3"
                                          name="subject3"
                                          className="input-small"
                                          placeholder="0.0"
                                          onChange={(e) => {
                                            setEnglish6(e.target.value);
                                          }}
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div className="my-account-area__content">
                            <h3>Ảnh chứng minh điểm học bạ</h3>
                            <div className="myaccount-table table-responsive text-center">
                              <table className="table table-bordered">
                                <thead className="thead-light">
                                  <tr>
                                    <th>STT</th>
                                    <th>Học bạ</th>
                                    <th>Chọn hình</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Mặt đầu tiên học bạ</td>

                                    <td>
                                      <tr>
                                        <input
                                          type="file"
                                          accept=".jpg, .jpeg, .png"
                                          onChange={(e) => {
                                            handleFileChangeTranscript(e, 1);
                                          }}
                                        />
                                      </tr>
                                      <tr>
                                        {previewFront && (
                                          <img
                                            src={preview1}
                                            alt="Preview"
                                            style={{
                                              width: "200px",
                                              height: "150px",
                                            }}
                                          />
                                        )}
                                      </tr>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Bảng điểm lớp 10</td>
                                    <td>
                                      <tr>
                                        <input
                                          type="file"
                                          accept=".jpg, .jpeg, .png"
                                          onChange={(e) => {
                                            handleFileChangeTranscript(e, 2);
                                          }}
                                        />
                                      </tr>
                                      <tr>
                                        {previewFront && (
                                          <img
                                            src={preview2}
                                            alt="Preview"
                                            style={{
                                              width: "200px",
                                              height: "150px",
                                            }}
                                          />
                                        )}
                                      </tr>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Bảng điểm lớp 11</td>

                                    <td>
                                      <tr>
                                        <input
                                          type="file"
                                          accept=".jpg, .jpeg, .png"
                                          onChange={(e) => {
                                            handleFileChangeTranscript(e, 3);
                                          }}
                                        />
                                      </tr>
                                      <tr>
                                        {previewFront && (
                                          <img
                                            src={preview3}
                                            alt="Preview"
                                            style={{
                                              width: "200px",
                                              height: "150px",
                                            }}
                                          />
                                        )}
                                      </tr>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>Bảng điểm lớp 12</td>

                                    <td>
                                      <tr>
                                        <input
                                          type="file"
                                          accept=".jpg, .jpeg, .png"
                                          onChange={(e) => {
                                            handleFileChangeTranscript(e, 4);
                                          }}
                                        />
                                      </tr>
                                      <tr>
                                        {previewFront && (
                                          <img
                                            src={preview4}
                                            alt="Preview"
                                            style={{
                                              width: "200px",
                                              height: "150px",
                                            }}
                                          />
                                        )}
                                      </tr>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </Row>
                        <Col lg={12} className="space-mb--30">
                          {/* <button type="button" onClick={handleLogin}>Login
                    </button> */}
                          <button
                            className="lezada-button lezada-button--medium"
                            type="button"
                            onClick={() => {
                              handleSubmitApplicationScoresAll();
                              handleSubmitImgCords();
                            }}
                          >
                            Lưu thông tin
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="wishList">
                <div className="my-account-area__content">
                  <h3>Thông tin dăng ký nguyện vọng</h3>
                  <div className="myaccount-table table-responsive text-center">
                    <table className="table table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>STT</th>
                          <th>Ngành xét tuyển</th>
                          <th>Tổ hợp môn</th>
                          <th>Điểm tổ hợp</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Công nghệ thông tin</td>
                          <td>A00</td>
                          <td>27</td>
                          <td>
                            <a href="#" className="check-btn sqr-btn ">
                              Đăng ký mới
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>Đăng ký nguyện vọng</h3>
                  <div className="myaccount-table table-responsive text-center">
                    <table className="table table-bordered">
                      <thead className="thead-light">
                        <tr>
                          <th>Ngành xét tuyển</th>
                          <th>Tổ hợp môn</th>
                          <th>Điểm tổ hợp</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <select
                              className="single-input-item"
                              // onChange={(e) => setGender(e.target.value)}
                            >
                              <option value="">Chọn Nguyện vọng</option>
                              <option value="1">Công nghệ thông tin</option>
                              <option value="2">Khoa học máy tính</option>
                              <option value="2">Kỹ thuật phần mềm</option>
                              <option value="2">Hệ thống thông tin</option>
                              <option value="2">Trí tuệ nhân tạo</option>
                            </select>
                          </td>
                          <td>
                            {" "}
                            <select
                              className="single-input-item"
                              // onChange={(e) => setGender(e.target.value)}
                              // value={gender}
                            >
                              <option value="">Chọn tổ hợp môn  </option>
                              <option value="1">A00 (Toán, Vật lý, Hóa học)</option>
                              <option value="2">A01 (Toán, Vật lý, Tiếng anh)</option>
                            </select>
                          </td>
                          <td>27</td>
                          <td>
                            <a href="#" className="check-btn sqr-btn ">
                              <FaRegCalendarPlus /> Đăng ký
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="accountDetails">
                <div className="my-account-area__content">
                  <h3>Account Details</h3>
                  <div className="account-details-form">
                    <form>
                      <Row>
                        <Col lg={6}>
                          <div className="single-input-item">
                            <label htmlFor="first-name" className="required">
                              First Name
                            </label>
                            <input type="text" id="first-name" />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="single-input-item">
                            <label htmlFor="last-name" className="required">
                              Last Name
                            </label>
                            <input type="text" id="last-name" />
                          </div>
                        </Col>
                      </Row>
                      <div className="single-input-item">
                        <label htmlFor="display-name" className="required">
                          Display Name
                        </label>
                        <input type="text" id="display-name" />
                      </div>
                      <div className="single-input-item">
                        <label htmlFor="email" className="required">
                          Email Address
                        </label>
                        <input type="email" id="email" />
                      </div>
                      <fieldset>
                        <legend>Password change</legend>
                        <div className="single-input-item">
                          <label htmlFor="current-pwd" className="required">
                            Current Password
                          </label>
                          <input type="password" id="current-pwd" />
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="single-input-item">
                              <label htmlFor="new-pwd" className="required">
                                New Password
                              </label>
                              <input type="password" id="new-pwd" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="single-input-item">
                              <label htmlFor="confirm-pwd" className="required">
                                Confirm Password
                              </label>
                              <input type="password" id="confirm-pwd" />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="single-input-item">
                        <button>Save Changes</button>
                      </div>
                    </form>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default MyAccount;
