'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Form from '@components/Form'
const CreatePrompt = () => {
    const { data: session } = useSession()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })
    const CreatePrompt = async (e) => {

        e.preventDefault()
        setSubmitting(true)
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if (response.ok) {
                window.location.href = '/'
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }
  return (
    <Form
    type='Create'
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={CreatePrompt}
    />
  )
}

export default CreatePrompt