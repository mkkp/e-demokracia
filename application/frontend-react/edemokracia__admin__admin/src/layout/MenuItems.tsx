import { useCallback, useEffect, useState } from 'react';
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Icon,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { usePrincipal } from '../auth';
import { AdminAdminPrincipalUserStored } from '~/generated/data-api';
import { Hero, Logo, useJudoNavigation, MdiIcon } from '../components';
import type { MenuItem, HeroProps, LogoProps } from '../components-api';

export interface MenuItemsProps {
  items: Array<MenuItem>;
}

function ActionItem(props: MenuItem & { isHidden: (menuItem: MenuItem) => boolean }) {
  const { t } = useTranslation();
  const { clearNavigate } = useJudoNavigation();
  const { id, level, label, to, icon, items, isHidden } = props;
  const [open, setOpen] = useState<boolean>(!!window.localStorage.getItem(id + '-open'));

  const hasSubGroup = () => Array.isArray(items) && items.length > 0;

  useEffect(() => {
    if (open) {
      window.localStorage.setItem(id + '-open', open.toString());
    } else {
      window.localStorage.removeItem(id + '-open');
    }
  }, [id, open]);

  return (
    <>
      {!isHidden(props) && (
        <ListItemButton
          className="navigation-item"
          sx={{ paddingLeft: (level || 1) * 2 }}
          id={id}
          onClick={() => {
            if (hasSubGroup()) {
              setOpen(!open);
              window.localStorage.setItem(id + '-open', (!open).toString());
            } else if (to) {
              clearNavigate(to);
            }
          }}
        >
          {icon ? (
            <ListItemIcon className="navigation-item-icon">
              <MdiIcon path={icon} />
            </ListItemIcon>
          ) : null}
          <ListItemText
            classes={{ primary: 'navigation-item-label' }}
            primary={t(`menuTree.${label}`, { defaultValue: label })}
          />
          {hasSubGroup() && (open ? <MdiIcon path='chevron-down' /> : <MdiIcon path='chevron-right' />)}
        </ListItemButton>
      )}
      {hasSubGroup() && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {(items || []).map((item) => (
            <ActionItem key={item.label} level={(level || 1) + 1} isHidden={isHidden} {...item} />
          ))}
        </Collapse>
      )}
    </>
  );
}

export function MenuItems(props: MenuItemsProps) {
  const { items } = props;
  const { t } = useTranslation();
  const { principal } = usePrincipal();

  const isHidden = (menuItem: MenuItem): boolean => {
    return menuItem.hiddenBy ? !!principal[menuItem.hiddenBy as keyof AdminAdminPrincipalUserStored] : false;
  };

  return (
    <>
      <List id="application-navigator" component="nav">
        {items.map((item) =>
          item.items && item.items.length ? (
            !isHidden(item) && (
              <List
                component="nav"
                key={item.label}
                subheader={
                  !isHidden(item) && (
                    <ListSubheader component="div" id="nested-list-subheader">
                      {t(`menuTree.${item.label}`, { defaultValue: item.label })}
                    </ListSubheader>
                  )
                }
              >
                {item.items.map((subItem) => (
                  <ActionItem key={subItem.label} isHidden={isHidden} {...subItem} />
                ))}
              </List>
            )
          ) : (
            <ActionItem key={item.label} isHidden={isHidden} {...item} />
          ),
        )}
      </List>
      {items.length ? <Divider variant="middle" /> : null}
    </>
  );
}
