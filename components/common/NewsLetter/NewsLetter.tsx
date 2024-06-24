import { FC, useState } from "react";
import { Button, Form, Input, notification } from "antd";
import s from "./NewsLetter.module.scss";
import { subscribeToNewsletter } from "services/misc";

interface Props {
  className?: string;
}

const NewsLetter: FC<Props> = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (formData: any) => {
    setIsLoading(true);
    try {
      const response = await subscribeToNewsletter({
        ...formData,
        source: "ukraine-nft",
      });
      notification.success({
        message: response.data.message,
        placement: "bottomRight",
      });
    } catch (error: any) {
      if (error.response.data.message !== undefined) {
        notification.error({
          message: error.response.data.message,
          placement: "bottomRight",
        });
        return;
      }
      notification.error({
        message: "Something went wrong",
        placement: "bottomRight",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${s.container} ${s[className]} `}>
      <span className={s.heading}></span>
      <Form
        className={`${s.form} newsletter theme-form`}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          className={s.email}
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Enter your email address"
            className={`${s.typeSpace}`}
          />
        </Form.Item>

        <Button
          className={`btn-app-default ${s.btn}`}
          loading={isLoading}
          htmlType="submit"
        >
          <span className={s.hidden}>get early access</span>
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetter;
