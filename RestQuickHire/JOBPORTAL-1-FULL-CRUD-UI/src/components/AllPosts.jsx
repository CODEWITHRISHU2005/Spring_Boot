import React from 'react'
import {
    Card,
    Grid,
    Typography,
    Button,
    Box,
    Alert
  } from "@mui/material";
  import axios from "axios";
  import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const AllPosts = () => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate("/edit",{state:{id}});
    }

    useEffect(() => {
        const fetchInitialPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/jobPosts`);
                setPost(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Failed to fetch job posts. Please make sure the backend server is running.');
            }
        }
        fetchInitialPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/jobPost/${id}`);
            window.location.reload();
        } catch (err) {
            console.error('Error deleting post:', err);
            setError('Failed to delete job post. Please try again.');
        }
    }

    return (
        <Box sx={{ p: 3 }}>
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}
            <Grid container spacing={2}>
                {post &&
                    post.map((p) => {
                        return (
                            <Grid key={p.id} item xs={12} md={6} lg={4}>
                                <Card sx={{ 
                                    p: 3, 
                                    height: '100%',
                                    backgroundColor: "#ADD8E6",
                                    position: 'relative'
                                }}>
                                    <Typography        
                                        variant="h5"
                                        sx={{ 
                                            fontSize: "2rem", 
                                            fontWeight: "600", 
                                            fontFamily: "sans-serif" 
                                        }}
                                    >
                                        {p.postProfile}
                                    </Typography>
                                    <Typography  
                                        sx={{ 
                                            color: "#585858", 
                                            mt: 2, 
                                            fontFamily: "cursive" 
                                        }} 
                                        variant="body1"
                                    >
                                        Description: {p.postDesc}
                                    </Typography>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            fontFamily: "unset",
                                            mt: 2
                                        }}
                                    >
                                        Experience: {p.reqExperience} years
                                    </Typography>
                                    <Typography 
                                        sx={{
                                            fontFamily: "serif",
                                            mt: 2
                                        }} 
                                        variant="body1"
                                    >
                                        Skills:
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                                        {p.postTechStack.map((s, i) => (
                                            <Typography key={i} variant="body2">
                                                {s}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Box sx={{ 
                                        position: 'absolute', 
                                        bottom: 16, 
                                        right: 16,
                                        display: 'flex',
                                        gap: 1
                                    }}>
                                        <Button 
                                            variant="contained" 
                                            color="error"
                                            onClick={() => handleDelete(p.postId)}
                                        >
                                            Delete
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="primary"
                                            onClick={() => handleEdit(p.postId)}
                                        >
                                            Edit
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    );
}

export default AllPosts;