export interface BtnProps {
    text: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    hoverBgColor: string;
    hoverTextColor: string;
}

export interface FormValues {
    name: string
    comment: string
    captcha?: string
}

export interface FormErrors {
    name?: string
    comment?: string
    captcha?: string
}

export interface CommentData extends FormValues {
    blogId: string;
}

export interface SectionOne {
    logoUrl: string,
    altText: string,
    text: string
}

export interface CardProps {
    title: string,
    subTitle: string,
    content: string
}

export interface SectionSix {
    logo: string;
    title: string;
    content: string;
}

export interface SectionEight {
    image: string,
    title: string,
    content: string
}

export interface CommentsType {
    _id: number
    date: string,
    name: string,
    comment: string,
    clapCount: number
}

export interface Blog {
    blogId: string;
    clapCount: number;
}

export interface NavItem {
    label: string,
    targetId?: string,
    href?: string
};