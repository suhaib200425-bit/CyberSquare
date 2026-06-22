import { useRef, useState } from 'react'
import {
    AlertTriangle,
    AlignLeft,
    Bell,
    Bold,
    ChevronDown,
    HelpCircle,
    Image as ImageIcon,
    IndentIncrease,
    Italic,
    Link2,
    List,
    ListOrdered,
    Redo2,
    Search,
    Smile,
    Strikethrough,
    Table,
    Underline,
    Undo2,
    UploadCloud,
    X,
    ArrowLeft,
    Plus,
} from 'lucide-react'
import CKEditorDemo from '../CKEditor/CKEditor'
import EditorContainer from '../TinyMCE/TinyMCE'
import { BASEURL } from '../../assets/assets'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import CategoryForm from '../CategoryForm/CategoryForm'

const fieldClass =
    'w-full rounded-[7px] border border-[var(--TEXT-COLOR)] bg-transperent px-4 py-2.5 text-[15px] text-[#e7e7e7] outline-none transition placeholder:text-[#68707b] focus:border-[#2dbfd2] focus:ring-2 focus:ring-[#2dbfd2]/25'

const selectClass = `${fieldClass} bg-[var(--BG-COLOR)]  appearance-none `

function AppHeader() {
    return (
        <header className="flex h-[88px] items-center justify-between border-b border-[#2a3036] bg-[#1b2025] px-8">
            <label className="relative block w-full max-w-[385px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[#8a919d]" />
                <input
                    type="search"
                    aria-label="Search"
                    placeholder="Search"
                    className="h-12 w-full rounded-[8px] border border-transparent bg-[#26282f] pl-13 pr-4 text-[18px] text-[#d5d8dc] outline-none transition placeholder:text-[#8c9199] focus:border-[#38c6d8]/70 focus:ring-2 focus:ring-[#38c6d8]/25"
                />
            </label>

            <div className="flex items-center gap-6">
                <button
                    type="button"
                    aria-label="Notifications"
                    className="grid h-10 w-10 place-items-center rounded-full text-[#b5bbc5] transition hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#38c6d8]/40"
                >
                    <Bell className="h-6 w-6" />
                </button>

                <div className="h-10 w-px bg-[#30363d]" />

                <button
                    type="button"
                    className="flex items-center gap-3 rounded-lg py-1 pl-1 pr-2 text-left transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#38c6d8]/40"
                >
                    <img
                        src="https://i.pravatar.cc/96?img=47"
                        alt="Anjali Nair"
                        className="h-[58px] w-[58px] rounded-full object-cover ring-1 ring-[#f4ad4e]"
                    />
                    <span className="min-w-[120px]">
                        <span className="block text-[18px] font-semibold leading-6 text-[#ededed]">
                            Anjali Nair
                        </span>
                        <span className="block text-[14px] leading-5 text-[#949aa3]">User | Logout</span>
                    </span>
                    <ChevronDown className="h-5 w-5 text-[#9aa0aa]" />
                </button>
            </div>
        </header>
    )
}

function Card({ title, className = '', children }) {
    return (
        <section className={`rounded-[11px] bg-[#171c21] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.28)] ${className}`}>
            <h2 className="mb-5 text-[24px] font-semibold leading-none text-[#d8d8d8]">{title}</h2>
            {children}
        </section>
    )
}

function FieldLabel({ children }) {
    return <label className="mb-2 block text-[17px] leading-5 text-[#d7d7d7]">{children}</label>
}

function PostDetailsCard({ image,title, onTitleChange, onBannerClick }) {
    return (
        <Card title="Post Details" className="min-h-[402px]">
            <FieldLabel>Title</FieldLabel>
            <input
                value={title}
                onChange={(event) => onTitleChange(event.target.value)}
                className={fieldClass}
            />
{
    image?
               
    <img onClick={onBannerClick} src={image} alt="" srcset="" className='mt-5 flex h-[300px] w-full flex-col items-center justify-center rounded-[10px] border border-dashed border-[#8f98a6] bg-[#262a2f] text-center transition hover:border-[#3ac7d8] hover:bg-[#2a3036] focus:outline-none focus:ring-2 focus:ring-[#38c6d8]/35' />
    :
    <button
                type="button"
                onClick={onBannerClick}
                className="mt-5 flex h-[300px] w-full flex-col items-center justify-center rounded-[10px] border border-dashed border-[#8f98a6] bg-[#262a2f] text-center transition hover:border-[#3ac7d8] hover:bg-[#2a3036] focus:outline-none focus:ring-2 focus:ring-[#38c6d8]/35"
            >
                <UploadCloud className="mb-4 h-[76px] w-[76px] stroke-[2.6] text-[#36c7d8]" />
                <span className="text-[35px] font-semibold leading-none text-[#eeeeee]">
                    Click to upload image
                </span>
            </button>
}
            
        </Card>
    )
}

function SelectField({ label, value, onChange, options, newCategory, setForm, form }) {

    return (
        <div>
            <FieldLabel>{label}</FieldLabel>
            <div className="flex gap-2">
                <div className="relative w-full">
                    <select
                        value={value.title}
                        onChange={(event) => {
                            const title = event.target.value
                            const result = options.find(item => item.title === title);
                            onChange(result)
                        }}
                        className={selectClass}
                    >
                        {options.map((option, index) => (
                            <option key={index + "-" + option.title} value={option.title}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1ba8b8]" />

                </div>
                {newCategory &&
                    <button onClick={() => setForm(true)} className={`${selectClass} w-min rounded-[10px] ]`}>
                        <Plus className='bg-[var(--BG-COLOR)' size={25} />
                    </button>
                }
            </div>
            {form && <CategoryForm setFormClose={setForm} />}
        </div>
    )
}

function PublishingInfoCard({ category, status, excerpt, onCategoryChange, onStatusChange, onExcerptChange }) {
    const token = localStorage.getItem("token")
    const [form, setForm] = useState(false)

    const { data, isPending, error } = useQuery({
        queryKey: ["postData", form],
        queryFn: async () => {
            return Promise.all([
                axios.get(`${BASEURL}/api/category/all-categories-by-auther`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            ]).then(([response]) => {
                console.log(response.data?.categories);

                return response.data?.categories
                // console.log(response.data);
            });
        }
    });

    if (isPending) return <p className='text-white'>LOADING</p>

    if (error) return <p className='text-red-500'>NotFound</p>

    return (
        <Card title="Publishing Info" className="min-h-[402px]">
            <div className="space-y-5">
                <SelectField
                    label="Category"
                    value={category}
                    onChange={onCategoryChange}
                    options={[
                        { title: "Select One" },
                        ...data,
                    ]}
                    newCategory
                    setForm={setForm}
                    form={form}
                />
                <SelectField
                    label="Status"
                    value={status}
                    onChange={onStatusChange}
                    options={[{ title: 'Draft' }, { title: 'Published' }]}
                />
                <div>
                    <FieldLabel>Excerpt</FieldLabel>
                    <textarea
                        value={excerpt}
                        onChange={(event) => onExcerptChange(event.target.value)}
                        className={`${fieldClass} h-[175px] resize-none`}
                    />
                </div>
            </div>
        </Card>
    )
}

function PremiumWarning() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) {
        return null
    }

    return (
        <div className="flex h-[46px] items-center gap-2 rounded-[7px] border border-[#e4d7b5] bg-[#fff7df] px-3 text-[16px] text-[#171717]">
            <AlertTriangle className="h-5 w-5 shrink-0 fill-[#8d7c55] text-[#8d7c55]" />
            <p className="flex-1 leading-none">
                The checklist premium plugin is not enabled on your API key.{' '}
                <button type="button" className="font-medium underline underline-offset-2">
                    Upgrade your account.
                </button>
            </p>
            <button
                type="button"
                aria-label="Dismiss warning"
                onClick={() => setIsVisible(false)}
                className="grid h-7 w-7 place-items-center rounded text-[#1f1f1f] hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#a68a42]/40"
            >
                <X className="h-5 w-5" />
            </button>
        </div>
    )
}






function NewPostPage({ setFormClose, form, setForm }) {

    const [currentImage,setCurrentImage]= useState('')
    const uploadInputRef = useRef(null)

    const updateField = (field, value) => {
        setForm((current) => ({ ...current, [field]: value }))
    }

    const handleBannerClick = () => {
        uploadInputRef.current?.click()
    }
    const EditorContainerValue = (newValue) => {
        setForm({ ...form, content: newValue })
        console.log(newValue);
    }

    return (
        <main className="h-screen bg-[#0f1011] w-full overflow-scroll font-sans text-[#eeeeee]">
            {/* <AppHeader /> */}

            <div className="mx-auto max-w-[1238px] px-8 pb-10 pt-7">
                <div className="flex items-center gap-2 mb-8">
                    <button onClick={() => {
                        setFormClose(false)
                    }} className='  p-[5px] '> <ArrowLeft size={30} /></button>
                    <h1 className=" text-[30px] font-semibold leading-none text-[#dedede]">
                        New Post
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2.05fr)_minmax(340px,0.95fr)]">
                    <PostDetailsCard
                    image={currentImage}
                        title={form.title}
                        onTitleChange={(value) => updateField('title', value)}
                        onBannerClick={handleBannerClick}
                    />
                    <PublishingInfoCard
                        category={form.category}
                        status={form.status}
                        excerpt={form.excerpt}
                        onCategoryChange={(value) => updateField('category', value)}
                        onStatusChange={(value) => updateField('status', value)}
                        onExcerptChange={(value) => updateField('excerpt', value)}
                    />
                </div>

                <div className="mt-6">
                    {/* <ContentEditorCard body={form.body} onBodyChange={(value) => updateField('body', value)} /> */}
                    {/* <Tiptap /> */}
                    {/* <CKEditorDemo /> */}
                    <EditorContainer content={form.content} EditorContainerValue={EditorContainerValue} />

                </div>
                <div className="flex mb-2 mt-3 items-end justify-end">
                    <button onClick={() => {
                        console.log(form);

                        // setFormClose(false)
                    }} className=' aline-end bg-blue-900 rounded-[10px] text-white p-[5px_10px] text-[20px]  w-[150px]'>
                        SUBMIT
                    </button>
                </div>
            </div>

            <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => {
                    const selectedFile = event.target.files?.[0]

                    if (selectedFile) {
                        setForm({ ...form, banner: selectedFile })
                        setCurrentImage(URL.createObjectURL(selectedFile))
                    }
                }}
            />
        </main>
    )
}

export default function PostCreateAndUpdateForm({ setFormClose, update }) {

    const [form, setForm] = useState({
        title: '',
        category: { title: "select" },
        status: { title: "Draft" },
        excerpt: '',
        content: `<h1>Hello</h1>`,
        banner: ""
    })
    return <NewPostPage setFormClose={setFormClose} form={form} setForm={setForm} />
}

function EditorToolbar() {
    const menuItems = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Table']

    return (
        <div className="overflow-hidden rounded-t-[4px] border border-[#3d454f] bg-[#151a1e]">
            <div className="flex h-[45px] items-center gap-5 border-b border-[#3d454f] px-5 text-[15px] text-[#e4e5e6]">
                {menuItems.map((item) => (
                    <button key={item} type="button" className="rounded px-0.5 hover:text-white">
                        {item}
                    </button>
                ))}
            </div>

            <div className="flex h-[47px] items-center overflow-x-auto border-b border-[#3d454f] px-4 text-[#e0e3e7]">
                <ToolbarButton icon={Undo2} label="Undo" disabled />
                <ToolbarButton icon={Redo2} label="Redo" disabled />

                <div className="mx-3 h-9 w-px bg-[#343b44]" />
                <ToolbarSelect value="Paragraph" wide />
                <ToolbarSelect value="System Font" wide />
                <ToolbarSelect value="12pt" />

                <div className="mx-2 h-9 w-px bg-[#343b44]" />
                <ToolbarButton icon={Bold} label="Bold" />
                <ToolbarButton icon={Italic} label="Italic" />
                <ToolbarButton icon={Underline} label="Underline" />
                <ToolbarButton icon={Strikethrough} label="Strikethrough" />

                <div className="mx-2 h-9 w-px bg-[#343b44]" />
                <ToolbarButton icon={Link2} label="Insert link" />
                <ToolbarButton icon={ImageIcon} label="Insert image" />

                <button
                    type="button"
                    aria-label="Insert table"
                    className="flex h-9 items-center gap-1 rounded px-2 text-[#dde0e4] transition hover:bg-white/6 hover:text-white"
                >
                    <Table className="h-[19px] w-[19px]" />
                    <ChevronDown className="h-4 w-4" />
                </button>

                <div className="mx-2 h-9 w-px bg-[#343b44]" />
                <button
                    type="button"
                    aria-label="Alignment"
                    className="flex h-9 items-center gap-1 rounded px-2 text-[#dde0e4] transition hover:bg-white/6 hover:text-white"
                >
                    <AlignLeft className="h-[20px] w-[20px]" />
                    <ChevronDown className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    aria-label="Line height"
                    className="flex h-9 items-center gap-1 rounded px-2 text-[#dde0e4] transition hover:bg-white/6 hover:text-white"
                >
                    <IndentIncrease className="h-[20px] w-[20px]" />
                    <ChevronDown className="h-4 w-4" />
                </button>
                <ToolbarButton icon={ListOrdered} label="Numbered list" />
                <ToolbarButton icon={List} label="Bulleted list" />
                <ToolbarButton icon={IndentIncrease} label="Increase indent" />

                <div className="ml-auto flex items-center gap-1 pl-3">
                    <ToolbarButton icon={Smile} label="Emoji" />
                    <ToolbarButton icon={HelpCircle} label="Help" />
                </div>
            </div>
        </div>
    )
}
function ContentEditorCard({ body, onBodyChange }) {
    return (
        <Card title="Content" className="relative min-h-[238px]">
            <div className="absolute right-6 top-[23px] w-[66%] max-w-[780px]">
                <PremiumWarning />
            </div>

            <div className="mt-7">
                <EditorToolbar />
                <textarea
                    value={body}
                    onChange={(event) => onBodyChange(event.target.value)}
                    aria-label="Post content"
                    className="h-[160px] w-full resize-none rounded-b-[4px] border-x border-b border-[#3d454f] bg-[#151a1e] p-5 text-[16px] leading-7 text-[#e6e8ea] outline-none transition placeholder:text-[#646b75] focus:border-[#38c6d8]/75 focus:ring-2 focus:ring-[#38c6d8]/20"
                    placeholder=""
                />
            </div>
        </Card>
    )
}
function ToolbarButton({ icon: Icon, label, disabled = false }) {
    return (
        <button
            type="button"
            aria-label={label}
            disabled={disabled}
            className="grid h-9 w-8 place-items-center rounded text-[#dde0e4] transition hover:bg-white/6 hover:text-white disabled:cursor-not-allowed disabled:text-[#4c535d]"
        >
            <Icon className="h-[19px] w-[19px]" />
        </button>
    )
}
function ToolbarSelect({ value, wide = false }) {
    return (
        <button
            type="button"
            className={`flex h-9 items-center justify-between rounded px-3 text-left text-[15px] text-[#e1e3e6] transition hover:bg-white/6 ${wide ? 'w-[142px]' : 'w-[82px]'}`}
        >
            {value}
            <ChevronDown className="h-4 w-4 text-[#c8cdd3]" />
        </button>
    )
}