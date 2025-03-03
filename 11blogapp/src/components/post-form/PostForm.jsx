import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import blogService from '../../appwrite/blog'
import storageService from '../../appwrite/storage'

import Button from '../Button'
import Input from '../Input'
import RTE from '../RTE'
import Select from '../Select'

function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => { 
        if(post){
            const file = data.img[0] ? await storageService.uploadFile(data.img[0]) : null
            if(file){
                await storageService.deleteFile(post.featuredImage)
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === string) {
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        }
    }, [])

    React.useEffect(() => {
        watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true })
            }

        })
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)}
            className="flex flex-wrap"
        >
            <div className="w-2/3 px-2">
                <Input
                    label="Title"
                    placeHolder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="Slug :"
                    placeHolder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />

                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />

            </div>
            <div className="1/3 px-2">

                <Input
                    label="Featured Image"
                    type="File"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg"
                    {...register("image"), { required: !post }}
                />

                {
                    post && (
                        <div className="w-full mb-4">
                            <img src={blogService.getPreviewFile(post.featuredImage)} alt={post.title}
                                className="rounded-lg"
                            />
                        </div>
                    )
                }

                <Select
                    label="Status"
                    className="mb-4"
                    options={["Active", "Inactive"]}
                    {...register("status"), { required: true }}
                />

                <Button
                    type='Submit'
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full"
                >{post ? "Update" : "Submit"} </Button>
            </div>

        </form>
    )
}

export default PostForm