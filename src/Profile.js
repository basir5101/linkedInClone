import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Link, Modal, TextField, Typography } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

export default function Profile() {
    const user = useSelector(selectUser);
    console.log(user);
    const [userInfo, setUserInfo] = useState({
        id: 1,
        name: 'Ravi Yadav .',
        email: '',
        password: '',
        accessToken: 'ieupro7834sdufspdoifjskeiruo3i45u3io4u3poius98r',
        job: 'Software Developer at Company',
        address: 'Bengaluru, karnataka, India',
        connection: '500+',
        experience: [
            {
                title: 'Software Developer',
                company: 'doodleblue innvations - Full-time',
                time: 'Nov 2021 - Present - 11 mos',
            },
            {
                title: 'Associate Software Engineer',
                company: 'doodleblue innvations - Full-time',
                time: 'Nov 2021 - Present - 11 mos',
            },
            {
                title: 'Student',
                company: 'Dayananda Sagar College of Engineering',
                time: 'Nov 2021 - Present - 11 mos',
            },
            {
                title: 'Full stack developer',
                company: 'doodleblue innvations - Full-time',
                time: 'Nov 2021 - Present - 11 mos',
            },
            {
                title: 'Internet of Things Intern',
                company: 'bytestorm pvt ltd',
                time: 'Nov 2021 - Present - 11 mos',
            },
        ],
        education: [
            {
                title: 'Dayananda Sagar College of Engineering',
                company: 'Bachelor of Technology- BTech, elctronics and instrumentation',
                time: '2016 - 2020',
            },
        ],
        certifications: [
            {
                title: 'HTML',
                company: 'Sololearn',
                time: 'Issued Jan 2020 - No Expiration Data'
            },
            {
                title: 'C#',
                company: 'Sololearn',
                time: 'Issued Jan 2020 - No Expiration Data'
            },
        ],
        skill: [
            {
                title: 'HTML5',
                value: 90
            },
            {
                title: 'css3',
                value: 85
            },

            {
                title: 'JS',
                value: 80
            },
            {
                title: 'React',
                value: 90
            }, {
                title: 'Python',
                value: 70
            },
            {
                title: 'c#',
                value: 75
            },

        ]
    });
    const handleProfilePic = () => {

    }

    // edit user 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const userDataChange = (e) => {
        const { name, value } = e.target;
        let newData = { ...userInfo };
        newData[name] = value;
        setUserInfo(newData);
    }
    const handleSave = () => {
        handleClose()
    }
    return (
        <div>
            <Box sx={{ mx: 25 }}>
                <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3 }}>

                    <Box sx={{ position: 'relative', }}>
                        <Avatar
                            src={userInfo?.photoURL}
                            style={{ width: 200, height: 200 }}
                        >
                            {userInfo?.photoURL}
                        </Avatar>
                        <Button
                            onClick={handleOpen}
                            color="primary"
                            variant="contained"
                            style={{
                                position: 'absolute',
                                right: 100,
                                marginTop: 5,
                                backgroundColor: '#3762d2',

                            }}
                        >
                            Edit Profile

                        </Button>
                    </Box>
                    <Box p={3}>
                        <Typography variant='h4'> {userInfo.name} </Typography>
                        <Typography >{userInfo.job}</Typography>
                        <Box display="flex" mt={4} alignItems="center">
                            <Typography
                                color="textSecondary"
                                variant="h6"
                                fontWeight="400"
                                style={{
                                    marginRight: '3px',
                                }}
                            >
                                {userInfo.address}
                            </Typography>
                            <Typography
                                component={Link}
                                to="#"
                                fontWeight="500"
                                sx={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                }}
                            >
                                Contact info
                            </Typography>
                        </Box>
                        <Typography
                            component={Link}
                            to="#"
                            fontWeight="500"
                            sx={{
                                display: 'block',
                                textDecoration: 'none',
                                color: 'primary.main',
                            }}
                        >
                            {userInfo.connection} connections
                        </Typography>
                    </Box>


                    {/* edit form  */}

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                        }}>
                            <Box
                                sx={{
                                    mt: 4,
                                }}
                            >

                                <TextField style={{ mb: 3 }} id="outlined-basic" onChange={userDataChange} name='name' label="Name" variant="outlined" />
                                <TextField style={{ mb: 3 }} id="outlined-basic" onChange={userDataChange} name='job' label="Job" variant="outlined" />
                                <TextField style={{ mb: 3 }} id="outlined-basic" onChange={userDataChange} name='address' label="Address" variant="outlined" />

                                <Button
                                    color="secondary"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={handleSave}
                                    sx={{
                                        pt: '10px',
                                        pb: '10px',
                                    }}
                                >
                                    save
                                </Button>




                            </Box>
                        </Box>
                    </Modal>

                </Box>
                {/* experience  */}
                {/* <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h3' fontWeight={'700'}>Experience</Typography>
                        <Box>
                            <Button
                                onClick={() => handleModalOpen('experience')}
                                color="secondary"
                                variant="contained"
                                size="small"
                                sx={{
                                    width: '30px',
                                    minWidth: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                }}
                            >
                                <AddIcon />
                            </Button>
                        </Box>
                    </Box>
                    {
                        userInfo?.experience?.length > 0 &&
                        userInfo.experience.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box display="flex" alignItems="center">
                                    <Button
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.primary.light,
                                            color: (theme) => theme.palette.primary.main,
                                            boxShadow: 'none',
                                            minWidth: '50px',
                                            width: '45px',
                                            height: '40px',
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <FeatherIcon icon="dollar-sign" width="18" height="18" />
                                    </Button>
                                    <Box
                                        sx={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            {data.company}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6" fontWeight="400">
                                            {data.time}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleModalOpen('experience', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <ModeEditIcon />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box> */}

                {/* education  */}
                {/* <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h3' fontWeight={'700'}>Education</Typography>
                        <Box>
                            <Button
                                onClick={() => handleModalOpen('education')}
                                color="secondary"
                                variant="contained"
                                size="small"
                                sx={{
                                    width: '30px',
                                    minWidth: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                }}
                            >
                                <AddIcon />
                            </Button>
                        </Box>
                    </Box>
                    {
                        userInfo?.education?.length > 0 &&
                        userInfo.education.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box display="flex" alignItems="center">
                                    <Button
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.primary.light,
                                            color: (theme) => theme.palette.primary.main,
                                            boxShadow: 'none',
                                            minWidth: '50px',
                                            width: '45px',
                                            height: '40px',
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <FeatherIcon icon="dollar-sign" width="18" height="18" />
                                    </Button>
                                    <Box
                                        sx={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            {data.company}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6" fontWeight="400">
                                            {data.time}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleModalOpen('education', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <ModeEditIcon />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box> */}


                {/* certifications  */}
                {/* <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h3' fontWeight={'700'}>Licenses & Certifications</Typography>
                        <Box>
                            <Button
                                onClick={() => handleModalOpen('certifications')}
                                color="secondary"
                                variant="contained"
                                size="small"
                                sx={{
                                    width: '30px',
                                    minWidth: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                }}
                            >
                                <AddIcon />
                            </Button>
                        </Box>
                    </Box>
                    {
                        userInfo?.certifications?.length > 0 &&
                        userInfo.certifications.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box display="flex" alignItems="center">
                                    <Button
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.primary.light,
                                            color: (theme) => theme.palette.primary.main,
                                            boxShadow: 'none',
                                            minWidth: '50px',
                                            width: '45px',
                                            height: '40px',
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <FeatherIcon icon="dollar-sign" width="18" height="18" />
                                    </Button>
                                    <Box
                                        sx={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            {data.company}
                                        </Typography>
                                        <Typography color="textSecondary" variant="h6" fontWeight="400">
                                            {data.time}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleModalOpen('certifications', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <ModeEditIcon />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box> */}

                {/* certifications  */}
                {/* <Box sx={{ position: 'relative', paddingBottom: '25px', mb: 3, border: '1px solid #E1E1E1' }}>
                    <Box p={2} display='flex' justifyContent={"space-between"}>
                        <Typography variant='h3' fontWeight={'700'}>Skills</Typography>
                        <Box>
                            <Button
                                onClick={() => handleSkillModalOpen('certifications')}
                                color="secondary"
                                variant="contained"
                                size="small"
                                sx={{
                                    width: '30px',
                                    minWidth: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                }}
                            >
                                <AddIcon />
                            </Button>
                        </Box>
                    </Box>
                    {
                        userInfo?.skill?.length > 0 &&
                        userInfo.skill.map((data, index) => (
                            <Box key={index} px={2} py={1} display="flex" alignItems="center" justifyContent={'space-between'}>
                                <Box display="flex" alignItems="center">
                                    <Button
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.primary.light,
                                            color: (theme) => theme.palette.primary.main,
                                            boxShadow: 'none',
                                            minWidth: '50px',
                                            width: '45px',
                                            height: '40px',
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <FeatherIcon icon="dollar-sign" width="18" height="18" />
                                    </Button>
                                    <Box
                                        sx={{
                                            ml: 2,
                                            "& a": {
                                                background: 'green'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                                fontWeight: '600'
                                            }}
                                        >

                                            {data.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                lineHeight: '1.235',
                                            }}
                                        >

                                            Expertise:   {data.value}%
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={() => handleSkillModalOpen('certifications', index, data)}
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            width: '30px',
                                            minWidth: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                        }}
                                    >
                                        <ModeEditIcon />
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }

                </Box> */}

                {/* edit form  */}

                {/* <Modal
                    open={openModal}
                    onClose={handleModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Box
                            sx={{
                                mt: 4,
                            }}
                        >

                            <CustomFormLabel htmlFor="title">Title</CustomFormLabel>
                            <CustomTextField onChange={handleChangeMoreData} name='title' defaultValue={moreFormData?.data?.title} id="title" variant="outlined" fullWidth />

                            <CustomFormLabel htmlFor="company">Company</CustomFormLabel>
                            <CustomTextField onChange={handleChangeMoreData} name='company' defaultValue={moreFormData?.data?.company} id="company" variant="outlined" fullWidth />

                            <CustomFormLabel htmlFor="time">Time</CustomFormLabel>
                            <CustomTextField onChange={handleChangeMoreData} name='time' defaultValue={moreFormData?.data?.time} id="time" variant="outlined" fullWidth />

                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleSaveMoreData}
                                sx={{
                                    pt: '10px',
                                    pb: '10px',
                                }}
                            >
                                save
                            </Button>
                            {
                                moreFormData?.data?.time && <Button
                                    color="error"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={() => handleDeleteMoreData(moreFormData.type, moreFormData.index)}
                                    sx={{
                                        pt: '10px',
                                        pb: '10px',
                                        mt: '10px'
                                    }}
                                >
                                    Delete {moreFormData.type}
                                </Button>
                            }



                        </Box>
                    </Box>
                </Modal> */}

                {/* modal for skill  */}
                {/* <Modal
                    open={openSkillModal}
                    onClose={handleSkillModalClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Box
                            sx={{
                                mt: 4,
                            }}
                        >

                            <CustomFormLabel htmlFor="title">Title</CustomFormLabel>
                            <CustomTextField onChange={handleChangeSkillData} name='title' defaultValue={skillFormData?.data?.title} id="title" variant="outlined" fullWidth />

                            <CustomFormLabel htmlFor="value">Value</CustomFormLabel>
                            <CustomTextField type="number"
                                InputProps={{ inputProps: { min: 0, max: 10 } }} onChange={handleChangeSkillData} name='value' defaultValue={skillFormData?.data?.value} id="company" variant="outlined" fullWidth />


                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleSaveSkillData}
                                sx={{
                                    pt: '10px',
                                    pb: '10px',
                                }}
                            >
                                save
                            </Button>
                            {
                                skillFormData?.data?.title && <Button
                                    color="error"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={() => handleDeleteSkillData(skillFormData.type, skillFormData.index)}
                                    sx={{
                                        pt: '10px',
                                        pb: '10px',
                                        mt: '10px'
                                    }}
                                >
                                    Delete {moreFormData.type}
                                </Button>
                            }



                        </Box>
                    </Box>
                </Modal> */}
            </Box>
        </div>
    )
}
