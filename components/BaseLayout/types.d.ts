export type ModeType = 'transparent' | 'white';

export type HeaderProps = {
  auto?: boolean;
  defaultMode?: ModeType;
  onModeChange?: (mode: ModeType) => void;
}

export type BaseLayoutProps = HeaderProps;