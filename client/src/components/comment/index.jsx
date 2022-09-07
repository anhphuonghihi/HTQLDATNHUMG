import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./comment.module.scss";
const Comment = () => {
  const { t } = useTranslation();
  const ListComment = [
    {
      id: 1,
      hoten: "g",
      nd: "g",
    },
    {
      id: 2,
      hoten: "Le Minh Phuoncygcdddfff",
      nd: "depjdhdjdjdj",
    },
  ];
  return (
    <div>
      <div className={styles["f_comment"]}>
        <div className={styles["f1_comment"]}>{t("comment")}</div>

        <div className={styles["f2_comment"]}>
          <input
            name="name"
            className={styles["name"]}
            placeholder={t("hoten")}
          />
          <textarea
            name="name"
            className={styles["name"]}
            placeholder={t("nd")}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </div>
      <div>
        {ListComment.map((item) => (
          <div className={styles["full_ht-nd"]}>
            <div className={styles["ht"]}>
              {t("hoten")}
              <div className={item.hoten.length > 30 && styles["small"]}>
                {item.hoten}
              </div>
            </div>
            <div className={styles["nd"]}>
              {t("nd")}
              {item.nd}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
