import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/reducer";
import { Break } from "../../../Break";
import { IconAnon } from "../../../Icons";
import { EColors, Text } from "../../../Text";
import styles from "./userblock.css";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  const loading = useSelector<RootState, boolean>((state) => state.me.loading);
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=1BM7pbvsK2UZ3k-R1gHT9Q&response_type=code&state=RANDOM_STRING&redirect_uri=https://test-onufrienkopr.vercel.app/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <IconAnon />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColors.grey99}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={username ? EColors.black : EColors.grey99}>
            {username || "Аноним"}
          </Text>
        )}
      </div>
    </a>
  );
}
